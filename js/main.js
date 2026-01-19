/**
 * MS Clínica - Main JavaScript File
 * Handles all interactive functionality for the website
 */

// ===============================================
// Global Variables
// ===============================================
let header;
let mobileMenuToggle;
let navMenu;
let backToTopButton;
let navDropdown;

// ===============================================
// Initialize on DOM Content Loaded
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    header = document.getElementById('header');
    mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    navMenu = document.querySelector('.nav-menu');
    backToTopButton = document.getElementById('back-to-top');
    navDropdown = document.querySelector('.nav-item-dropdown');
    
    // Initialize features
    initMobileMenu();
    initSmoothScroll();
    initScrollHeader();
    initBackToTop();
    initScrollReveal();
    initFormValidation();
    initMobileDropdown();
});

// ===============================================
// Mobile Menu Toggle
// ===============================================
function initMobileMenu() {
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't close if it's the dropdown toggle
                if (!this.parentElement.classList.contains('nav-item-dropdown')) {
                    mobileMenuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ===============================================
// Mobile Dropdown Toggle
// ===============================================
function initMobileDropdown() {
    if (navDropdown) {
        const dropdownLink = navDropdown.querySelector('.nav-link');
        
        dropdownLink.addEventListener('click', function(e) {
            // Only prevent default and toggle on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                navDropdown.classList.toggle('active');
            }
        });
    }
}

// ===============================================
// Smooth Scroll for Anchor Links
// ===============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===============================================
// Header Style Change on Scroll
// ===============================================
function initScrollHeader() {
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// ===============================================
// Back to Top Button
// ===============================================
function initBackToTop() {
    if (backToTopButton) {
        // Show/hide button on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===============================================
// Scroll Reveal Animations
// ===============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (revealElements.length === 0) {
        // Add scroll-reveal class to sections if not already present
        const sections = document.querySelectorAll('.sobre-nos, .especialidades, .diferenciais, .testemunhos, .marcar-consulta');
        sections.forEach(section => {
            section.classList.add('scroll-reveal');
        });
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const allRevealElements = document.querySelectorAll('.scroll-reveal');
    allRevealElements.forEach(element => {
        observer.observe(element);
    });
}

// ===============================================
// Form Validation and Submission
// ===============================================
function initFormValidation() {
    const form = document.getElementById('appointment-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const especialidade = document.getElementById('especialidade').value;
            const mensagem = document.getElementById('mensagem').value.trim();
            
            // Validation
            if (!nome || !email || !telefone || !especialidade) {
                showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormMessage('Por favor, insira um email válido.', 'error');
                return;
            }
            
            if (!isValidPhone(telefone)) {
                showFormMessage('Por favor, insira um número de telefone válido.', 'error');
                return;
            }
            
            // If validation passes, show success message
            // In a real implementation, this would send data to a server
            showFormMessage('Obrigado! O seu pedido foi enviado com sucesso. Entraremos em contacto em breve.', 'success');
            
            // Reset form
            form.reset();
            
            // Scroll to message
            const messageElement = document.getElementById('form-message');
            if (messageElement) {
                setTimeout(() => {
                    messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    }
}

// ===============================================
// Form Helper Functions
// ===============================================
function showFormMessage(message, type) {
    const messageElement = document.getElementById('form-message');
    
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = 'form-message ' + type;
        
        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 5000);
        }
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Accept Portuguese phone numbers (with or without country code)
    // Examples: +351 220 925 250, 220925250, 912345678, +351912345678
    const phoneRegex = /^(\+351)?[0-9\s]{9,}$/;
    return phoneRegex.test(phone);
}

// ===============================================
// Window Resize Handler
// ===============================================
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Remove active class from dropdown
        if (navDropdown) {
            navDropdown.classList.remove('active');
        }
    }
});

// ===============================================
// Lazy Loading for Images (if images are added later)
// ===============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when images are added
if (document.querySelectorAll('img[data-src]').length > 0) {
    initLazyLoading();
}

// ===============================================
// Parallax Effect (Optional - subtle)
// ===============================================
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const heroHeight = hero.offsetHeight;
            
            if (scrolled <= heroHeight) {
                const parallaxSpeed = 0.5;
                hero.style.transform = 'translateY(' + (scrolled * parallaxSpeed) + 'px)';
            }
        });
    }
}

// Uncomment to enable parallax effect
// initParallax();

// ===============================================
// Console Log - Website Info
// ===============================================
console.log('%c MS Clínica Website ', 'background: #D4A84B; color: #fff; font-size: 16px; padding: 10px;');
console.log('%c O Luxo de se Sentir Bem ', 'color: #D4A84B; font-size: 14px;');
