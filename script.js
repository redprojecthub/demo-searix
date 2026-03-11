// script.js - JavaScript for Searix.net 2.0 website interactivity

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Video controls
const video = document.querySelector('video');
if (video) {
    // Auto-play if supported, otherwise show controls
    video.addEventListener('loadeddata', () => {
        if (video.paused) {
            video.play().catch(() => {
                // Fallback to controls if autoplay fails
                video.controls = true;
            });
        }
    });
}

// Gallery image modal (if needed in future)
function openModal(imgSrc) {
    // Placeholder for modal functionality
    console.log('Opening modal for:', imgSrc);
}

// Form submission (placeholder)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    });
}

// Animation on scroll (simple fade-in)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Add fade-in class to CSS for animation
document.head.insertAdjacentHTML('beforeend', `
<style>
.fade-in {
    animation: fadeIn 0.6s ease-in;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
`);