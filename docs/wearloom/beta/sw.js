'use strict';

// Retire the beta shell while preserving each person's wardrobe on this device.
self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('wearloom-beta-shell-')).map(key => caches.delete(key)));
    await self.clients.claim();
    const windows = await self.clients.matchAll({ type: 'window' });
    const scope = self.registration.scope;
    await self.registration.unregister();
    const landing = new URL('../', scope).href;
    await Promise.allSettled(windows.filter(client => client.url.startsWith(scope))
      .map(client => client.navigate(landing)));
  })());
});
