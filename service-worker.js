const CACHE = {
    name: 'portfolio-v1',
    urls: [
        './',
        './index.html',
        './styles.css',
        './app.js',
        './manifest.json',
        './assets/zenitsu.jpg'  // Updated path
    ]
};

class PortfolioCache {
    async init() {
        try {
            const cache = await caches.open(CACHE.name);
            await cache.addAll(CACHE.urls);
        } catch (error) {
            console.error('Cache initialization failed:', error);
        }
    }

    async fetch(request) {
        try {
            // Skip caching for data URLs and chrome-extension URLs
            if (request.url.startsWith('data:') || 
                request.url.startsWith('chrome-extension:')) {
                return fetch(request);
            }
            
            const cacheResponse = await caches.match(request);
            if (cacheResponse) return cacheResponse;

            // Only cache same-origin requests
            if (new URL(request.url).origin === location.origin) {
                try {
                    const networkResponse = await fetch(request);
                    if (networkResponse && networkResponse.status === 200) {
                        const cache = await caches.open(CACHE.name);
                        cache.put(request, networkResponse.clone());
                    }
                    return networkResponse;
                } catch (error) {
                    console.error('Network fetch failed:', error);
                }
            }

            return fetch(request);
            
        } catch (error) {
            console.error('Fetch failed:', error);
            // Return fallback content if available
            return caches.match('./offline.html');
        }
    }
}

const portfolioCache = new PortfolioCache();

self.addEventListener('install', e => e.waitUntil(portfolioCache.init()));
self.addEventListener('fetch', e => e.respondWith(portfolioCache.fetch(e.request)));
