'use strict';

async function concluir() {
  const params = new URLSearchParams(window.location.search);
  history.replaceState(null, '', window.location.pathname);
  const titulo = document.getElementById('titulo');
  const mensagem = document.getElementById('mensagem');
  const voltar = document.getElementById('voltar');
  const states = params.getAll('state');
  const codes = params.getAll('code');
  const errors = params.getAll('error');
  const valid = states.length === 1 && /^[A-Za-z0-9_-]{43}$/.test(states[0])
    && ((codes.length === 1 && errors.length === 0 && codes[0].length > 0 && codes[0].length <= 2048)
      || (codes.length === 0 && errors.length === 1 && errors[0].length > 0 && errors[0].length <= 128));
  if (!valid) {
    mensagem.textContent = 'Abra o Wearloom e toque em Conectar Pinterest para começar.';
    return;
  }
  const body = new URLSearchParams({ state: states[0] });
  if (codes.length) body.set('code', codes[0]);
  else body.set('error', errors[0]);
  try {
    const response = await fetch('https://wearloom-taverna.ialmeidafotos.chatgpt.site/api/pinterest/callback', {
      method: 'POST', body, credentials: 'omit', cache: 'no-store', redirect: 'error',
      referrerPolicy: 'no-referrer', headers: { Accept: 'application/json' },
    });
    const result = await response.json();
    if (response.ok && result.status === 'ready') {
      titulo.textContent = 'Autorização recebida';
      mensagem.textContent = 'Volte ao aplicativo neste aparelho para abrir suas pastas.';
    } else if (result.status === 'access_denied') {
      titulo.textContent = 'Conexão cancelada';
      mensagem.textContent = 'Você pode conectar sua conta depois, em Inspirações.';
    } else {
      mensagem.textContent = 'Esta tentativa não pôde ser concluída. Inicie uma nova conexão no aplicativo.';
    }
  } catch {
    mensagem.textContent = 'O serviço não respondeu. Confira a conexão e tente novamente pelo aplicativo.';
  }
  voltar.hidden = false;
}
void concluir();
