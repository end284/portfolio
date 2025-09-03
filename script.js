const h1 = document.querySelector('.typing');
const text = h1.textContent;

function typeAnimation() {
  h1.textContent = '';
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${i * 0.15}s`;
    h1.appendChild(span);
  });
}

// Jalankan pertama kali
typeAnimation();

// Ulangi tiap 5 detik
setInterval(() => {
  typeAnimation();
}, 5000);

const p = document.querySelector('.home-section p');
const pText = p.textContent;
p.textContent = '';

pText.split('').forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.opacity = 0;
  span.style.animation = `type 0.03s forwards`;
  span.style.animationDelay = `${i * 0.05}s`; // delay lebih cepat
  p.appendChild(span);
});



// Smooth scroll handled by CSS scroll-behavior: smooth

// Highlight active nav link on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function activateNavLink() {
    let scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach((section) => {
      const top = section.offsetTop - 70; // offset for navbar height
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', activateNavLink);
  activateNavLink();

  // Fade-in on scroll for elements with .fade-in-on-scroll
  const faders = document.querySelectorAll('.fade-in-on-scroll');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  // Contact form submission (dummy)
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you for your message, ' + name + '! I will get back to you soon.');

    contactForm.reset();
  });
});

