
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navButtons = document.querySelector('.nav-buttons');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navButtons.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        navButtons.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#FFFFFF';
        navbar.style.backdropFilter = 'none';
    }
});

// Statistics Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current).toLocaleString();
            }
        }, 20);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('achievements')) {
                animateStats();
            }
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter');
const newsletterInput = newsletterForm.querySelector('input');
const newsletterButton = newsletterForm.querySelector('button');

newsletterButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = newsletterInput.value.trim();
    
    if (email && isValidEmail(email)) {
        // Simulate subscription
        newsletterButton.textContent = 'Subscribed!';
        newsletterButton.style.background = '#10B981';
        newsletterInput.value = '';
        
        setTimeout(() => {
            newsletterButton.textContent = 'Subscribe';
            newsletterButton.style.background = '#3B82F6';
        }, 3000);
    } else {
        alert('Please enter a valid email address');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Conference card hover effects
document.querySelectorAll('.conference-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Benefit card hover effects
document.querySelectorAll('.benefit-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.benefit-icon');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.benefit-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Form validation for newsletter
newsletterInput.addEventListener('input', () => {
    const email = newsletterInput.value.trim();
    if (email && isValidEmail(email)) {
        newsletterInput.style.borderColor = '#10B981';
        newsletterButton.disabled = false;
        newsletterButton.style.opacity = '1';
    } else {
        newsletterInput.style.borderColor = '#E5E7EB';
        newsletterButton.disabled = true;
        newsletterButton.style.opacity = '0.7';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth animations to elements
    const animatedElements = document.querySelectorAll('.benefit-card, .conference-card, .stat-card');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});
