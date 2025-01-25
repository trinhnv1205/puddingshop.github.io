// Constants
const CONFIG = {
    animationDelay: 200,
    observerThreshold: 0.1,
    observerMargin: '50px'
};

// Use ES6 modules for better organization
const ExtensionService = {
    extensions: [
        {
            name: "TikTok All Liked Videos Remove",
            description: "Remove all liked videos from your TikTok account.",
            url: "https://chromewebstore.google.com/detail/tiktok-all-liked-videos-r/iejagbbnohfpanbhmenmgdliekekifie",
            // Base64 encoded icon
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiMzNDk4ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPkV4dDwvdGV4dD48L3N2Zz4=",
        },
        {
            name: "Tiktok video downloader ultimate",
            description: "Download Tiktik videos with one click.",
            url: "https://chromewebstore.google.com/detail/tiktok-video-downloader/mmcaapmklpamicmpkobbnffbhedmcnhk",
            // Base64 encoded icon
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiMzNDk4ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPkV4dDwvdGV4dD48L3N2Zz4=",
        },
        {
            name: "TikTok Background Runner",
            description: "Run TikTok in the background.",
            url: "https://chromewebstore.google.com/detail/tiktok-background-runner/lpnlnagpbhkicopaodjkccephknekklh",
            // Base64 encoded icon
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiMzNDk4ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPkV4dDwvdGV4dD48L3N2Zz4=",
        },
        {
            name: "Summarize AI: Quick Article Summarizer",
            description: "Summarize any article or text with one click.",
            url: "https://chromewebstore.google.com/detail/summarize-ai-quick-articl/ajkhkehelbjkbgdljodkphigpeggmnna",
            // Base64 encoded icon
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiMzNDk4ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPkV4dDwvdGV4dD48L3N2Zz4=",
        }
    ],
    
    createCard(extension, index) {
        return `
            <div class="extension-card fade-in" style="--delay: ${index * 0.1}s">
                ${this.createCardContent(extension)}
            </div>
        `;
    },
    
    createCardContent(extension) {
        return `
            <img src="${extension.icon}" alt="${extension.name}" class="extension-icon" loading="lazy">
            <h3>${extension.name}</h3>
            <p>${extension.description}</p>
            ${this.createStoreButton(extension.url)}
        `;
    },

    createStoreButton(url) {
        return `
            <a href="${url}" target="_blank" rel="noopener" class="btn-primary">
                View in Store
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3.5 9L8.5 4M8.5 4H4M8.5 4V8.5" stroke="currentColor" stroke-width="1.5"/>
                </svg>
            </a>
        `;
    }
};

// Event handlers and initialization
const App = {
    init() {
        this.initExtensions();
        this.initObserver();
        this.bindEvents();
    },

    initExtensions() {
        const grid = document.querySelector('.extensions-grid');
        if (!grid) return;
        
        ExtensionService.extensions.forEach((ext, index) => {
            setTimeout(() => {
                const card = document.createElement('div');
                card.innerHTML = ExtensionService.createCard(ext, index);
                grid.appendChild(card.firstElementChild);
            }, index * CONFIG.animationDelay);
        });
    },

    initObserver() {
        const observerOptions = {
            root: null,
            rootMargin: CONFIG.observerMargin,
            threshold: CONFIG.observerThreshold,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const lazyElements = document.querySelectorAll(".lazy-load");
        lazyElements.forEach((element) => observer.observe(element));
    },

    bindEvents() {
        window.addEventListener("orientationchange", this.handleScroll);
        window.addEventListener("scroll", this.handleScroll);
        document.addEventListener("DOMContentLoaded", () => {
            this.setProfileImage();
            this.initializeResponsive();
            this.handleScroll(); // Initial check
        });
    },

    setProfileImage() {
        const profileImg = document.querySelector(".profile-photo");
        if (profileImg) {
            profileImg.onerror = function () {
                this.src = defaultProfileImage;
                console.log("Failed to load zenitsu.jpg, using default image");
            };

            // Set initial image
            if (!profileImg.src || profileImg.src === window.location.href) {
                profileImg.src = "zenitsu.jpg";
            }
        }
    },

    initializeResponsive() {
        // Handle mobile menu
        const menuItems = document.querySelectorAll("nav a");
        menuItems.forEach((item) => {
            item.addEventListener("click", () => {
                if (window.innerWidth <= 768) {
                    // Smooth scroll for mobile
                    const target = document.querySelector(item.getAttribute("href"));
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                }
            });
        });
    },

    handleScroll() {
        const elements = document.querySelectorAll(".section, .extension-card");
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            if (isVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
