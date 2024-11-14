
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    console.log('Final Enhanced Portfolio Loaded');
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
        dots[i].classList.toggle('active', i === index);
    });
}

// Auto-swipe every 3 seconds
function autoSwipe() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Initialize the slider
showSlide(currentIndex);
setInterval(autoSwipe, 3000);

// Add click events to dots for manual navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});



// Toggle Contact Form Visibility
const contactBtn = document.getElementById('contact-btn');
const contactFormContainer = document.getElementById('contact-form-container');

contactBtn.addEventListener('click', () => {
    // Toggle visibility of the contact form
    if (contactFormContainer.classList.contains('hidden')) {
        contactFormContainer.classList.remove('hidden');
        contactFormContainer.classList.add('visible');
    } else {
        contactFormContainer.classList.add('hidden');
        contactFormContainer.classList.remove('visible');
    }
});
