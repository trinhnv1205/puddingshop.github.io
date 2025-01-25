const CACHE = {
    name: 'portfolio-v1',
    urls: [
        './',
        './index.html',
        './privacy.html',
        './styles.css',
        './app.js',
        './manifest.json',
        './zenitsu.jpg'
    ]
};

class PortfolioCache {
    async init() {
        const cache = await caches.open(CACHE.name);
        await cache.addAll(CACHE.urls);
    }

    async fetch(request) {
        if (request.url.startsWith('data:')) return;
        
        const cache = await caches.match(request);
        return cache || fetch(request);
    }
}

const portfolioCache = new PortfolioCache();

self.addEventListener('install', e => e.waitUntil(portfolioCache.init()));
self.addEventListener('fetch', e => e.respondWith(portfolioCache.fetch(e.request)));
