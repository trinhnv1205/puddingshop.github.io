// Default Base64 profile image (placeholder)
const defaultProfileImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlMGUwZTAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNiIgZmlsbD0iIzY2NiI+UHJvZmlsZSBJbWFnZTwvdGV4dD48L3N2Zz4=';

const extensions = [
    {
        name: "Extension Name 1",
        description: "Description of your first Chrome extension",
        url: "https://chrome.google.com/webstore/detail/your-extension-1",
        // Base64 encoded icon
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiMzNDk4ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPkV4dDwvdGV4dD48L3N2Zz4='
    },
    {
      name: "Extension Name 1",
      description: "Description of your first Chrome extension",
      url: "https://chrome.google.com/webstore/detail/your-extension-1",
      // Base64 encoded icon
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiMzNDk4ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPkV4dDwvdGV4dD48L3N2Zz4='
  },
  {
    name: "Extension Name 1",
    description: "Description of your first Chrome extension",
    url: "https://chrome.google.com/webstore/detail/your-extension-1",
    // Base64 encoded icon
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiMzNDk4ZGIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPkV4dDwvdGV4dD48L3N2Zz4='
},
    // Add more extensions as needed
];

// Add intersection observer for lazy loading
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function createExtensionCard(extension, index) {
    return `
        <div class="extension-card fade-in" style="--delay: ${index * 0.1}s">
            <img src="${extension.icon}" alt="${extension.name}" class="extension-icon" loading="lazy">
            <h3>${extension.name}</h3>
            <p>${extension.description}</p>
            <a href="${extension.url}" target="_blank" class="btn-primary">
                View in Store
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 8px">
                    <path d="M3.5 9L8.5 4M8.5 4H4M8.5 4V8.5" stroke="currentColor" stroke-width="1.5"/>
                </svg>
            </a>
        </div>
    `;
}

function initializeExtensions() {
    const extensionsGrid = document.querySelector('.extensions-grid');
    if (extensionsGrid) {
        extensionsGrid.innerHTML = '';
        extensions.forEach((ext, index) => {
            setTimeout(() => {
                const card = document.createElement('div');
                card.innerHTML = createExtensionCard(ext, index);
                extensionsGrid.appendChild(card.firstElementChild);
            }, index * 200); // Stagger the appearance of cards
        });
    }
}

// Function to load and convert image to Base64
function loadImageAsBase64(imageUrl, callback) {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const base64 = canvas.toDataURL('image/png');
        callback(base64);
    };
    img.src = imageUrl;
}

// Set profile image with fallback to default
function setProfileImage() {
    const profileImg = document.querySelector('.profile-photo');
    if (profileImg) {
        profileImg.onerror = function() {
            this.src = defaultProfileImage;
            console.log('Failed to load zenitsu.jpg, using default image');
        };
        
        // Set initial image
        if (!profileImg.src || profileImg.src === window.location.href) {
            profileImg.src = 'zenitsu.jpg';
        }
    }
}

// Add scroll animations
function handleScroll() {
    const elements = document.querySelectorAll('.section, .extension-card');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Add responsive initialization
function initializeResponsive() {
    // Handle mobile menu
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Smooth scroll for mobile
                const target = document.querySelector(item.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Handle lazy loading
    const lazyElements = document.querySelectorAll('.lazy-load');
    lazyElements.forEach(element => observer.observe(element));
}

// Handle orientation changes
window.addEventListener('orientationchange', () => {
    handleScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    initializeExtensions();
    setProfileImage();
    initializeResponsive();
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});
