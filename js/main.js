// ============================================
// SINTAEMA Website - Main JavaScript
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // Mobile Navigation Toggle
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Toggle icon between bars and times
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 767) {
                    navMenu.classList.remove('active');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // ============================================
    // Smooth Scrolling for Anchor Links
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Active Navigation Highlighting
    // ============================================
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a');

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href');

            if (linkPage === currentPage ||
                (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    setActiveNavLink();

    // ============================================
    // Sticky Header on Scroll
    // ============================================
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            header.style.boxShadow = 'var(--shadow-md)';
        }

        lastScrollTop = scrollTop;
    });

    // ============================================
    // Form Validation and Development Notice
    // ============================================

    // Contact Form
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            let isValid = true;

            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => el.remove());

            // Validate name
            if (!name.value.trim()) {
                showError(name, 'Por favor, informe seu nome');
                isValid = false;
            }

            // Validate email
            if (!email.value.trim()) {
                showError(email, 'Por favor, informe seu e-mail');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Por favor, informe um e-mail válido');
                isValid = false;
            }

            // Validate message
            if (!message.value.trim()) {
                showError(message, 'Por favor, escreva sua mensagem');
                isValid = false;
            }

            if (isValid) {
                // Show development notice
                showDevelopmentNotice();
            }
        });
    }

    // Membership Form
    const membershipForm = document.getElementById('membershipForm');

    if (membershipForm) {
        membershipForm.addEventListener('submit', function (e) {
            e.preventDefault();
            showDevelopmentNotice();
        });
    }

    // Appointment Scheduling Links
    const appointmentLinks = document.querySelectorAll('a[href*="contato.html"]');

    appointmentLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        if (linkText.includes('agendar') || linkText.includes('agendamento')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                showDevelopmentNotice();
            });
        }
    });

    // "Leia Mais" buttons that point to # (news articles)
    const readMoreLinks = document.querySelectorAll('a[href="#"]');

    readMoreLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        if (linkText.includes('leia mais') || linkText.includes('ler mais')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                showDevelopmentNotice();
            });
        }
    });

    // Newsletter subscription form
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            showDevelopmentNotice();
        });
    }

    // Download buttons for documents (pauta, ACTs, etc)
    const downloadLinks = document.querySelectorAll('a[href*="documents/"][download]');

    downloadLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showDevelopmentNotice();
        });
    });

    // Development Notice Function
    function showDevelopmentNotice() {
        alert('⚠️ Funcionalidade em desenvolvimento\n\nEsta funcionalidade estará disponível em breve.\n\nEnquanto isso, entre em contato conosco:\n📞 (48) 3224-3868\n📧 secretaria@sintaema.org.br');
    }

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'var(--color-error)';
        errorDiv.style.fontSize = 'var(--font-size-sm)';
        errorDiv.style.marginTop = 'var(--spacing-1)';
        errorDiv.textContent = message;

        input.parentElement.appendChild(errorDiv);
        input.style.borderColor = 'var(--color-error)';

        // Remove error on input
        input.addEventListener('input', function () {
            const error = this.parentElement.querySelector('.error-message');
            if (error) {
                error.remove();
                this.style.borderColor = '';
            }
        }, { once: true });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ============================================
    // Lazy Loading for Images
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // Back to Top Button (optional)
    // ============================================
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // Print Functionality
    // ============================================
    const printButtons = document.querySelectorAll('[data-print]');

    printButtons.forEach(button => {
        button.addEventListener('click', function () {
            window.print();
        });
    });

    // ============================================
    // External Links - Open in New Tab
    // ============================================
    const externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach(link => {
        // Skip if it's an internal link
        if (link.hostname === window.location.hostname) return;

        // Add target blank and rel attributes if not already present
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ============================================
    // Console Welcome Message
    // ============================================
    console.log('%c SINTAEMA/SC ', 'background: #003366; color: #fff; font-size: 20px; padding: 10px;');
    console.log('%c Água é vida, privatizá-la é crime ', 'background: #0066CC; color: #fff; font-size: 14px; padding: 5px;');
    console.log('Website desenvolvido com HTML5, CSS3 e JavaScript moderno');
});

// ============================================
// Utility Functions
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
