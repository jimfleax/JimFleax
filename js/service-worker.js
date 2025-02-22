self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/styles.css',
        '/js/main.js',
        '/icons/192.png',
        '/icons/512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
