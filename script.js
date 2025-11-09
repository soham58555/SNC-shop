// Products Data
const products = [
    {
        id: 1,
        name: 'Quantum Headphones Pro',
        price: ' 45000',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1742570922875-e5a60e950307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwaGVhZHBob25lcyUyMHRlY2h8ZW58MXx8fHwxNzYyNjU2MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Audio'
    },
    {
        id: 2,
        name: 'NeoWatch Ultra',
        price: ' 25000',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1739287700815-7eef4abaab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI1NzYwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Wearable'
    },
    {
        id: 3,
        name: 'AirPods Infinity',
        price: '18000',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzYyNTY1NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Audio'
    },
    {
        id: 4,
        name: 'Stellar Phone X',
        price: ' 70000',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9kZXJufGVufDF8fHx8MTc2MjYxNDE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Mobile'
    },
    {
        id: 5,
        name: 'HyperBook Gaming',
        price: ' 189999',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1640955014216-75201056c829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBnYW1pbmd8ZW58MXx8fHwxNzYyNjU2MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Computing'
    },
    {
        id: 6,
        name: 'Echo Sphere',
        price: ' 14999',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1586078875290-c22eb791ad5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYyNjU2MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Smart Home'
    },
    {
        id: 7,
        name: 'SkyDrone 4K',
        price: '59999',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1633169420455-97eb1405fc51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNTc2NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Gadgets'
    },
    {
        id: 8,
        name: 'Reality VR Headset',
        price: ' 39999',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXR8ZW58MXx8fHwxNzYyNjU2MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'VR/AR'
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: 'Pratham Patel',
        role: 'Tech Enthusiast',
        rating: 5,
        text: 'SNC Shopping has completely changed how I shop for tech. The futuristic interface and amazing product selection make every purchase exciting!',
        avatar: 'AC'
    },
    {
        id: 2,
        name: 'Shamshad Khan',
        role: 'Digital Creator',
        rating: 5,
        text: 'The quality of products and the fast delivery is unmatched. I always find the latest gadgets here before anywhere else.',
        avatar: 'SM'
    },
    {
        id: 3,
        name: 'Virat kohli',
        role: 'Gaming Professional',
        rating: 5,
        text: 'From gaming laptops to VR headsets, SNC has everything I need. Customer service is top-notch too!',
        avatar: 'MJ'
    },
    {
        id: 4,
        name: 'Emma Rodriguez',
        role: 'Smart Home Advocate',
        rating: 5,
        text: 'I love how easy it is to find cutting-edge smart home products. The website is beautiful and super intuitive.',
        avatar: 'ER'
    }
];

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-mobile .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Render Products
const productsGrid = document.getElementById('productsGrid');
let likedProducts = new Set();

function renderProducts() {
    productsGrid.innerHTML = products.map((product, index) => `
        <div class="product-card glass" style="animation-delay: ${index * 0.1}s">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="product-action-btn" onclick="toggleLike(${product.id})">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
                <div class="product-category">${product.category}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-value">(${product.rating})</span>
                </div>
                <div class="product-footer">
                    <span class="product-price text-glow-cyan">₹${product.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    let starsHtml = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHtml += `
                <svg class="star filled" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            `;
        } else {
            starsHtml += `
                <svg class="star empty" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            `;
        }
    }
    
    return starsHtml;
}

function toggleLike(productId) {
    const productCard = event.currentTarget.closest('.product-card');
    const likeBtn = event.currentTarget;
    
    if (likedProducts.has(productId)) {
        likedProducts.delete(productId);
        likeBtn.classList.remove('liked');
    } else {
        likedProducts.add(productId);
        likeBtn.classList.add('liked');
    }
}

let cartCount = 3;

function addToCart(productId) {
    cartCount++;
    const cartBadge = document.getElementById('cartBadge');
    cartBadge.textContent = cartCount;
    
    // Add animation effect
    cartBadge.style.animation = 'none';
    setTimeout(() => {
        cartBadge.style.animation = 'pulse 0.5s ease-in-out';
    }, 10);
    
    // Optional: Show a notification
    const product = products.find(p => p.id === productId);
    console.log(`Added ${product.name} to cart!`);
}

// Testimonials Carousel
let currentTestimonialIndex = 0;

function renderTestimonial(index) {
    const testimonial = testimonials[index];
    const testimonialMain = document.getElementById('testimonialMain');
    
    testimonialMain.innerHTML = `
        <svg class="quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">
            <div class="author-avatar">
                <span class="avatar-text">${testimonial.avatar}</span>
            </div>
            <div>
                <h4 class="author-name">${testimonial.name}</h4>
                <p class="author-role">${testimonial.role}</p>
            </div>
        </div>
        <div class="testimonial-stars">
            ${Array(testimonial.rating).fill('').map(() => `
                <svg class="star" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            `).join('')}
        </div>
    `;
}

function renderTestimonialDots() {
    const dotsContainer = document.getElementById('testimonialDots');
    dotsContainer.innerHTML = testimonials.map((_, index) => 
        `<div class="dot ${index === currentTestimonialIndex ? 'active' : ''}" onclick="goToTestimonial(${index})"></div>`
    ).join('');
}

function renderTestimonialThumbnails() {
    const thumbnailsContainer = document.getElementById('testimonialThumbnails');
    thumbnailsContainer.innerHTML = testimonials.map((testimonial, index) => `
        <div class="thumbnail glass ${index === currentTestimonialIndex ? 'active' : ''}" onclick="goToTestimonial(${index})">
            <div class="thumbnail-avatar">
                <span class="avatar-text">${testimonial.avatar}</span>
            </div>
            <p class="thumbnail-name">${testimonial.name}</p>
        </div>
    `).join('');
}

function goToTestimonial(index) {
    currentTestimonialIndex = index;
    renderTestimonial(index);
    renderTestimonialDots();
    renderTestimonialThumbnails();
}

document.getElementById('prevTestimonial').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    goToTestimonial(currentTestimonialIndex);
});

document.getElementById('nextTestimonial').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    goToTestimonial(currentTestimonialIndex);
});

// Auto-play testimonials
let testimonialInterval = setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    goToTestimonial(currentTestimonialIndex);
}, 5000);

// Pause auto-play when user interacts
document.getElementById('testimonialMain').addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

document.getElementById('testimonialMain').addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        goToTestimonial(currentTestimonialIndex);
    }, 5000);
});

// Newsletter Form
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input');
    const email = emailInput.value;
    
    // Show success message (in a real app, this would send to a server)
    alert(`Thank you for subscribing with ${email}!`);
    emailInput.value = '';
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
function observeElements() {
    document.querySelectorAll('.product-card, .feature-card, .stats-container, .section-header').forEach(el => {
        observer.observe(el);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderTestimonial(currentTestimonialIndex);
    renderTestimonialDots();
    renderTestimonialThumbnails();
    
    // Delay observer initialization to ensure products are rendered
    setTimeout(observeElements, 100);
});

// Cursor Trail Effect (Optional - can be enabled for extra futuristic feel)
/*
const cursorDot = document.createElement('div');
cursorDot.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: var(--cyan);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    box-shadow: 0 0 10px var(--cyan);
    transition: transform 0.1s ease;
`;
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX - 4 + 'px';
    cursorDot.style.top = e.clientY - 4 + 'px';
});
*/

