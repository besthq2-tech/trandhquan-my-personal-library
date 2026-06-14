export function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Trigger slightly before it comes fully into view
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // If it's a one-time animation, we can unobserve
        // observer.unobserve(entry.target); 
      } else {
        // Optional: remove class when out of view so it animates again when scrolling back
        entry.target.classList.remove('in-view');
      }
    });
  }, observerOptions);

  // Find all elements that need to be animated
  const animatedElements = document.querySelectorAll('.anim-trigger');
  animatedElements.forEach(el => observer.observe(el));
}
