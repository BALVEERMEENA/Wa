const CACHE_NAME = "wasender-pro-v1";
const ASSETS = [
  "/Wa/",
  "/Wa/index.html",
  "/Wa/manifest.json",
  "/Wa/icons/icon-192.png",
  "/Wa/icons/icon-512.png",
  "/Wa/icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
