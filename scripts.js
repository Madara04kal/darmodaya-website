// ===========================
// Hamburger toggle + auto close
// ===========================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navClose = document.querySelector(".nav-close");
const navItems = document.querySelectorAll(".nav-links li a");

// Hamburger toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Close button toggle
navClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  hamburger.classList.remove("toggle");
});

// Close menu when clicking a menu item
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
  });
});

// Click outside nav-links to close menu
document.addEventListener('click', (e) => {
  const isClickInsideNav = navLinks.contains(e.target) || hamburger.contains(e.target) || navClose.contains(e.target);
  if (!isClickInsideNav) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
  }
});

// ===========================
// Particle generation
// ===========================
window.addEventListener("load", () => {
  const particleContainer = document.querySelector(".particles");

  if (!particleContainer) return;

  const isMobile = window.innerWidth <= 768;
  const numParticles = isMobile ? 25 : 50;
  const containerHeight = particleContainer.offsetHeight || window.innerHeight;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("span");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * containerHeight + "px";

    const size = isMobile ? 2 + Math.random() * 4 : 4 + Math.random() * 6;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    const floatDuration = 3 + Math.random() * 2; // speed
    const twinkleDuration = 1 + Math.random() * 2;
    const floatDelay = Math.random() * 5;
    const twinkleDelay = Math.random() * 2;

    particle.style.animation = `
      floatHeader ${floatDuration}s linear ${floatDelay}s infinite,
      twinkle ${twinkleDuration}s alternate ${twinkleDelay}s infinite
    `;

    particleContainer.appendChild(particle);
  }
});

// ===========================
// Navbar scroll highlight
// ===========================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255,255,255,0.95)";
    navbar.style.boxShadow = "0 3px 15px rgba(0,0,0,0.15)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.9)";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  }

  const sections = document.querySelectorAll("header, section");
  const navLinks = document.querySelectorAll(".nav-links a");
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});
