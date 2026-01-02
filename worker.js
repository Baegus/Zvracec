const CACHE_NAME = "zvracec-v5";
const ASSETS = [
	"./",
	"./index.html",
	"./manifest.json",
	"https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js"
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request)
		.then((response) => response || fetch(event.request))
	);
});
