const CACHE_NAME = "portfolio-v1";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/fav.ico",
  "/logo192.png",
  "/logo512.png",
  "/robots.txt",
];

// Install Service Worker
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching app shell");
      return cache.addAll(STATIC_ASSETS);
    }),
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

// Fetch Event - Cache First Strategy with Network Fallback
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Handle API calls with Network First strategy
  if (url.pathname.includes("/api/")) {
    event.respondWith(networkFirst(request));
  } else {
    // Handle assets with Cache First strategy
    event.respondWith(cacheFirst(request));
  }
});

// Cache First Strategy: Use cache if available, fallback to network
function cacheFirst(request) {
  return caches
    .match(request)
    .then((response) => {
      return (
        response ||
        fetch(request).then((response) => {
          // Cache successful responses
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
      );
    })
    .catch(() => {
      // Return offline page if available
      return caches.match("/index.html");
    });
}

// Network First Strategy: Try network first, fallback to cache
function networkFirst(request) {
  return fetch(request)
    .then((response) => {
      if (response && response.status === 200) {
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });
      }
      return response;
    })
    .catch(() => {
      // Return from cache if network fails
      return caches.match(request).then((response) => {
        return response || caches.match("/index.html");
      });
    });
}

// Handle messages from clients
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
