document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Header height offset
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Fade-in animation for elements as they enter viewport
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });
  
  fadeElements.forEach(element => {
    fadeInObserver.observe(element);
  });
  
  // Lazy load portfolio images
  const lazyImages = document.querySelectorAll('.portfolio-img');
  
  const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.setAttribute('src', src);
          img.removeAttribute('data-src');
        }
        
        lazyLoadObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '100px'
  });
  
  lazyImages.forEach(image => {
    lazyLoadObserver.observe(image);
  });
}); 