const CACHE_NAME = 'porthub-terraria-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './main.js',
  './main.wasm',
  './mast.bin',
  './app.ico',
  './atlas1.webp', './atlas1.txt',
  './atlas2.webp', './atlas2.txt',
  './atlas3.webp', './atlas3.txt',
  './atlas4.webp', './atlas4.txt',
  './atlas5.webp', './atlas5.txt',
  './atlas6.webp', './atlas6.txt',
  './atlas7.webp', './atlas7.txt',
  './atlas8.webp', './atlas8.txt',
  './atlas9.webp', './atlas9.txt'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache Worker: Securing sharp graphics assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
