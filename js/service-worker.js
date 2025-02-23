const CACHE_NAME = "static-cache-v1",
  MAX_CACHE_AGE = 604800000,
  FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/css/Settikef.otf",
    "/icons/16.png",
    "/icons/32.png",
    "/icons/72.png",
    "/icons/96.png",
    "/icons/128.png",
    "/icons/192.png",
    "/icons/512.png",
    "/media/me.png",
    "/manifest.json",
  ];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((e) => e.addAll(FILES_TO_CACHE))),
    self.skipWaiting();
}),
  self.addEventListener("activate", (e) => {
    const a = [CACHE_NAME];
    e.waitUntil(
      caches
        .keys()
        .then((e) =>
          Promise.all(e.map((e) => -1 === a.indexOf(e) && caches.delete(e)))
        )
    ),
      self.clients.claim();
  }),
  self.addEventListener("fetch", (e) => {
    const a = e.request;
    if (a.url.endsWith(".js") || a.url.endsWith(".css")) return;
    e.respondWith(
      caches.match(a).then((e) => {
        if (e) {
          const t = Date.now(),
            s = e.headers.get("date");
          if (s) {
            if (t - new Date(s).getTime() > MAX_CACHE_AGE)
              return fetchAndCache(a);
            return e;
          }
          return e;
        }
        return fetchAndCache(a);
      })
    );
  });
function fetchAndCache(e) {
  return fetch(e).then(
    (a) =>
      a &&
      200 === a.status &&
      (caches.open(CACHE_NAME).then((t) => {
        t.put(e, a.clone());
      }),
      a)
  );
}
