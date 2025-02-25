const CACHE_NAME = "jimfleax-cache-v1";
const CACHE_EXPIRATION = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/js/main.js",
  "/css/styles.css",
  "css/JetBrains_Mono/JetBrainsMono-Italic-VariableFont_wght.ttf",
  "css/JetBrains_Mono/JetBrainsMono-VariableFont_wght.ttf",
  "css/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
  "css/Montserrat/Montserrat-VariableFont_wght.ttf",
  "css/Settikef.otf",
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

// Install event - pre-cache necessary files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        await cache.addAll(FILES_TO_CACHE);
        const now = Date.now();
        const metadata = {};
        FILES_TO_CACHE.forEach((url) => {
          metadata[url] = now;
        });
        await cache.put(
          "cache-metadata",
          new Response(JSON.stringify(metadata))
        );
        self.skipWaiting(); // Activate worker immediately
      } catch (error) {
        console.error("Failed to cache files during install:", error);
      }
    })
  );
});

// Fetch event - Try network first, fallback to cache if offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          throw new Error("Bad response, fallback to cache");
        }
        return caches.open(CACHE_NAME).then(async (cache) => {
          const metadata = await getCacheMetadata(cache);
          metadata[event.request.url] = Date.now();
          await cache.put(event.request, response.clone());
          await cache.put("cache-metadata", new Response(JSON.stringify(metadata)));
          return response;
        });
      })
      .catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        const metadata = await getCacheMetadata(cache);
        const cachedResponse = await cache.match(event.request);

        if (cachedResponse) {
          const cachedTime = metadata[event.request.url] || 0;
          if (Date.now() - cachedTime > CACHE_EXPIRATION) {
            console.log("Cache expired:", event.request.url);
            await cache.delete(event.request);
            return fetch(event.request);
          }
          return cachedResponse;
        }

        return Promise.reject("No cache available");
      })
  );
});

// Helper function to retrieve cache metadata
async function getCacheMetadata(cache) {
  const metadataResponse = await cache.match("cache-metadata");
  if (!metadataResponse) return {};
  return metadataResponse.json();
}

// Activate event - Cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Become available to all clients immediately
});