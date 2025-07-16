const header = document.querySelector("header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 60) {
      header.style.padding = "0.7rem 1rem";
    } else {
      header.style.padding = "1.5rem 1rem";
    }
    lastScroll = currentScroll;
  });

