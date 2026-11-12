// A dedicated worker can be terminated even while WASM is running on Safari.
import * as ort from './ort.wasm.min.js';

ort.env.wasm.numThreads = 1;
ort.env.wasm.wasmPaths = {
  mjs: new URL('./ort-wasm-simd-threaded.js', import.meta.url).href,
  wasm: new URL('./ort-wasm-simd-threaded.wasm', import.meta.url).href,
};
ort.env.logLevel = 'error';

// Safari may discard its HTTP cache between workers. This cache holds public model bytes only.
const cache = typeof caches === 'undefined' ? Promise.resolve(null)
  : caches.open('wearloom-public-vision-1').catch(() => null);

async function assetBytes(name, expected, size) {
  const url = new URL(name, import.meta.url);
  const store = await cache;
  const cached = store && await store.match(url).catch(() => null);
  const response = cached || await fetch(url, { cache: 'force-cache' });
  if (!response.ok) throw new Error('Modelo indisponível.');
  const bytes = new Uint8Array(await response.arrayBuffer());
  const hash = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  const digest = Array.from(hash, byte => byte.toString(16).padStart(2, '0')).join('');
  if (digest !== expected || bytes.length !== size) {
    if (store) await store.delete(url).catch(() => {});
    throw new Error('Download incompleto.');
  }
  if (store && !cached) {
    // Private browsing or an exhausted storage quota still permits this inference.
    await store.put(url, new Response(bytes)).catch(() => {});
  }
  return bytes;
}

async function weights(model) {
  const manifest = await fetch(new URL('models.json', import.meta.url), { cache: 'force-cache' });
  if (!manifest.ok) throw new Error('Manifesto indisponível.');
  const parts = (await manifest.json())[model];
  const size = parts.reduce((total, part) => total + part.size, 0);
  const bytes = new Uint8Array(size);
  let offset = 0;
  // Fetch one part at a time to bound memory on phones. Each URL carries its content hash.
  for (const part of parts) {
    const chunk = await assetBytes(part.file, part.sha256, part.size);
    bytes.set(chunk, offset);
    offset += chunk.length;
    self.postMessage({ progress: Math.round(offset / size * 100) });
  }
  return bytes;
}

self.onmessage = async ({ data }) => {
  const clip = data.model === 'clip';
  const parser = data.model === 'parser';
  const size = clip ? 224 : parser ? 512 : 320;
  const outputName = clip ? 'image_embeds' : parser ? 'logits' : '1959';
  try {
    ort.env.wasm.wasmBinary = await assetBytes('ort-wasm-simd-threaded.wasm', '06ba057753da3847e4c24f02d91ab133455b0817c69a44993a9a53a2146df9e3', 14264838);
    const session = await ort.InferenceSession.create(await weights(data.model), {
      executionProviders: ['wasm'], executionMode: 'sequential', enableCpuMemArena: false, enableMemPattern: false,
    });
    try {
      const input = new ort.Tensor('float32', data.input, [1, 3, size, size]);
      try {
        const outputs = await session.run({ [clip || parser ? 'pixel_values' : 'input.1']: input }, [outputName]);
        const tensor = outputs[outputName];
        try {
          if (!(tensor.data instanceof Float32Array) || tensor.data.length !== (clip ? 512 : (parser ? 18 : 1) * size * size)) throw new Error('Resultado inválido.');
          const values = tensor.data.slice();
          self.postMessage({ values }, [values.buffer]);
        } finally { tensor.dispose(); }
      } finally { input.dispose(); }
    } finally { await session.release(); }
  } catch (error) {
    self.postMessage({ error: true });
  }
};
