// ===========================
// Particle generation (starry)
const particleContainer = document.querySelector('.particles');
if (particleContainer) {
  const numParticles = 40;
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('span');
    particle.style.left = Math.random() * 100 + 'vw';
    const size = 4 + Math.random() * 6;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration =
      (5 + Math.random() * 5) + 's, ' + (1 + Math.random() * 2) + 's';
    particle.style.animationDelay =
      Math.random() * 5 + 's, ' + Math.random() * 2 + 's';
    particleContainer.appendChild(particle);
  }
}

// ===========================
// Navbar scroll effect & active link
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 3px 15px rgba(0,0,0,0.15)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }

  const sections = document.querySelectorAll('header, section');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// ===========================
// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
