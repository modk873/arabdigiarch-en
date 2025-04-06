// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (for responsive design)
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        if (!header) return;

        // Create mobile menu button if it doesn't exist
        if (!document.querySelector('.mobile-menu-btn')) {
            const nav = document.querySelector('nav');
            const mobileBtn = document.createElement('button');
            mobileBtn.className = 'mobile-menu-btn';
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileBtn.setAttribute('aria-label', 'قائمة');
            
            header.querySelector('.container').insertBefore(mobileBtn, nav);
            
            // Add event listener to toggle menu
            mobileBtn.addEventListener('click', () => {
                nav.classList.toggle('active');
                mobileBtn.innerHTML = nav.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
        }
    };

    // Call mobile menu function
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }

    // Add resize event listener
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            createMobileMenu();
        }
    });

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.country-card, .feature, .achievement-card, .place-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };

    // Call animate function on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Initial call to animate elements that are already in view
    animateOnScroll();
}); 