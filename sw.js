const CACHE_NAME = 'prathibha-v1';
const ASSETS = [
  '/papp/',
  '/papp/index.html',
  '/papp/logos/prathibha.png',
  '/papp/logos/prathibhainstitute.png',
  '/papp/logos/prathibhasolutions.png',
  '/papp/logos/prathibhatechnologies.png'
];

// Install: cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
