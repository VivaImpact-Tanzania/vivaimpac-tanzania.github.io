        // Mobile check function
        function isMobile() {
            return window.innerWidth <= 768;
        }

        // Initialize hamburger menu functionality
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
            
            if (hamburger && navLinks) {
                // Toggle menu on hamburger click
                hamburger.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (isMobile()) {
                        navLinks.classList.toggle('active');
                        hamburger.classList.toggle('active');
                    }
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(event) {
                    if (isMobile() && 
                        !hamburger.contains(event.target) && 
                        !navLinks.contains(event.target)) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                });
                
                // Close menu when clicking on nav links
                const navLinksItems = navLinks.querySelectorAll('a');
                navLinksItems.forEach(link => {
                    link.addEventListener('click', function() {
                        if (isMobile()) {
                            navLinks.classList.remove('active');
                            hamburger.classList.remove('active');
                        }
                    });
                });
                
                // Handle window resize
                window.addEventListener('resize', function() {
                    if (!isMobile()) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                });
            }
        });

        // Additional smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });