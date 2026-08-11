/* Service worker — cache-first for the app shell so the trainer works offline
   (train on the metro, in a lift, on a plane). Bump CACHE on every deploy. */
const CACHE = "launchpad-v7";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/style.css",
  "./js/util.js",
  "./js/abstract.js",
  "./js/engine.js",
  "./js/game.js",
  "./js/mock.js",
  "./js/charts.js",
  "./js/app.js",
  "./data/french-vocab.js",
  "./data/french-grammar.js",
  "./data/french-conj.js",
  "./data/eu.js",
  "./data/eu-learn.js",
  "./data/verbal.js",
  "./data/numerical.js",
  "./data/digital.js",
  "./data/sjt.js",
  "./data/dictation.js",
  "./data/reading.js",
  "./data/writing.js",
  "./data/writing-models.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll fails atomically if any single file 404s; add individually instead
      .then(c => Promise.all(ASSETS.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      // Serve from cache, but refresh in the background so updates land next visit.
      const net = fetch(e.request).then(res => {
        if (res && res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
