const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  primaryNav.classList.toggle('open', !isOpen);
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open menu');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const leadForm = document.querySelector('#lead-form');
const toast = document.querySelector('#toast');

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 4200);
}

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!leadForm.reportValidity()) return;

  const data = new FormData(leadForm);
  const name = data.get('name');
  const phone = data.get('phone');
  const service = data.get('service');
  const details = data.get('details') || 'No additional details yet.';
  const message = `Hi JC Tree Services, I'm ${name}. I need help with ${service}. ${details} My callback number is ${phone}.`;
  const separator = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? '&' : '?';

  showToast('Opening a text to JC Tree Services with your project details…');
  window.setTimeout(() => {
    window.location.href = `sms:+15012403451${separator}body=${encodeURIComponent(message)}`;
  }, 350);
});

document.querySelector('#year').textContent = new Date().getFullYear();
