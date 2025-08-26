// Dynamic Island Notification
function showIsland(message) {
  const island = document.querySelector('.island-pill');
  island.textContent = message;
  island.classList.add('show');
  setTimeout(() => island.classList.remove('show'), 2500);
}

// Smooth Scroll + Buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Contact Form Popup
const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  popup.setAttribute('aria-hidden', 'false');
});

closePopup.addEventListener('click', () => {
  popup.setAttribute('aria-hidden', 'true');
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showIsland("Thanks for you!"); // أو تظهر Toast صغيرة
  }).catch(err => console.error('Failed to copy: ', err));
}