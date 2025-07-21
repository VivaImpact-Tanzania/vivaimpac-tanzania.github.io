// Check if screen is mobile-sized
function isMobile() {
  return window.innerWidth <= 768;
}

// Initialize hamburger menu when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (isMobile()) {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (
        isMobile() &&
        !hamburger.contains(event.target) &&
        !navLinks.contains(event.target)
      ) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });

    // Close menu when clicking nav links
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
      link.addEventListener('click', function () {
        if (isMobile()) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
        }
      });
    });

    // Reset menu on resize (desktop view)
    window.addEventListener('resize', function () {
      if (!isMobile()) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  }

  // Smooth scroll for anchor links
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

  // Fade-in animation for sections on scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  // Initialize fade-in sections
  document.querySelectorAll('.fade-in-section').forEach(section => {
    // Check if element is already in viewport on page load
    const rect = section.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInViewport) {
      // Add visible class immediately for elements already in view
      section.classList.add('visible');
    }
    
    observer.observe(section);
  });
});
