// scripts.js


// ===========================
// Particle generation (starry)
const particleContainer = document.querySelector('.particles');
if (particleContainer) {
  const numParticles = 40; // more stars
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('span');

    // random horizontal position
    particle.style.left = Math.random() * 100 + 'vw';

    // random size between 2px and 6px
    const size = 4 + Math.random() * 6;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // random animation duration
    particle.style.animationDuration = (5 + Math.random() * 5) + 's, ' + (1 + Math.random() * 2) + 's';

    // random delay so stars are staggered
    particle.style.animationDelay = Math.random() * 5 + 's, ' + Math.random() * 2 + 's';

    particleContainer.appendChild(particle);
  }
}


// ===========================
// Navbar scroll effect
// ===========================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 3px 15px rgba(0,0,0,0.15)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }

  // ===========================
  // Highlight active nav link
  // ===========================
  const sections = document.querySelectorAll('header, section');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // offset for navbar height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
