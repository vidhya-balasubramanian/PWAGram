self.addEventListener("install", (event) => {
    console.log("Service worker is installing", event)
});

self.addEventListener("activate", (event) => {
    console.log("Service worker is activating", event);
    return self.clients.claim()
});
self.addEventListener("fetch", (event) => {
    console.log("From Service Worker -- Fetching something", event);
    event.respondWith(fetch(event.request));
});