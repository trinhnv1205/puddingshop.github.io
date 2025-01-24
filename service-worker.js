const CACHE_NAME = 'portfolio-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './privacy.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './zenitsu.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

self.addEventListener('fetch', (event) => {
    // Don't cache Base64 images as they're already inline
    if (event.request.url.startsWith('data:')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
