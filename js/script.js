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
  // Check if screen is mobile-sized
function isMobile() {
  return window.innerWidth <= 768;
}

// Initialize hamburger menu when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    // ... your existing hamburger code ...

    // ✅ NEW: Scroll listener to detect when header leaves viewport
    const header = document.querySelector('header');

    if (header) {
      let headerBottom = header.offsetHeight; // Get header height
      let headerExitedViewport = false; // Prevent repeated logs

      window.addEventListener('scroll', function () {
        const scrollY = window.scrollY || window.pageYOffset;

        // Check if scrolled PAST the header
        if (scrollY > headerBottom && !headerExitedViewport) {
          console.log('✅ Header has scrolled out of view');
          headerExitedViewport = true; // Only log once
        }

        // Optional: Reset if user scrolls back up
        if (scrollY <= headerBottom) {
          headerExitedViewport = false;
          // console.log('Header is back in view');
        }
      });

      // Optional: Update header height on resize (in case it changes)
      window.addEventListener('resize', function () {
        headerBottom = header.offsetHeight;
      });
    }
  }
});
});


