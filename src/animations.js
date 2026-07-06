/**
 * Scroll and Load Animations Controller
 */
export function initAnimations() {
  // 1. Initial Page Load Animations (Hero elements)
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroTitle = document.querySelector('.hero-title');
  const heroDesc = document.querySelector('.hero-desc');
  const heroBadges = document.querySelector('.hero-badge-strip');
  const heroVisual = document.querySelector('.hero-visual');

  // Helper to add animation class with a delay
  const animateWithDelay = (element, delayClass) => {
    if (element) {
      element.classList.add('animate-load', delayClass);
      // Trigger reflow to start transition
      setTimeout(() => {
        element.classList.add('animated');
      }, 50);
    }
  };

  animateWithDelay(heroSubtitle, 'delay-100');
  animateWithDelay(heroTitle, 'delay-200');
  animateWithDelay(heroDesc, 'delay-300');
  animateWithDelay(heroBadges, 'delay-400');
  
  if (heroVisual) {
    heroVisual.classList.add('animate-load-scale');
    setTimeout(() => {
      heroVisual.classList.add('animated');
    }, 100);
  }

  // 2. Scroll-Triggered Animations using IntersectionObserver
  const scrollElements = document.querySelectorAll(
    '.project-card, .exp-card, .review-item, .section-header, .rating-header-display, .footer-column'
  );

  const elementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-active');
        // Once animated, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // offset bottom slightly for better UX
  });

  scrollElements.forEach(el => {
    el.classList.add('animate-scroll-ready');
    elementObserver.observe(el);
  });
}
