/* ===== Dynamic Island helper ===== */
function showIsland(message) {
  const pill = document.querySelector('.island-pill');
  const text = document.querySelector('.island-text');
  if (!pill || !text) return;
  text.textContent = message;
  pill.classList.add('show');
  // auto-hide after 1.6s
  clearTimeout(window.__islandTimer);
  window.__islandTimer = setTimeout(()=> pill.classList.remove('show'), 1600);
}
window.showIsland = showIsland;

/* ===== Smooth reveal once on scroll (IntersectionObserver) ===== */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // reveal once
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => obs.observe(r));
} else {
  // fallback
  reveals.forEach(r => r.classList.add('active'));
}

/* ===== Copy to clipboard for social items ===== */
function copyToClipboard(text) {
  if (!navigator.clipboard) {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showIsland('Thanks for you!'); } catch(e) {}
    ta.remove();
    return;
  }
  navigator.clipboard.writeText(text).then(()=>{
    showIsland('Thanks for you!');
  }).catch(err=>{
    console.error('copy failed', err);
  });
}
window.copyToClipboard = copyToClipboard;

/* ===== Make sure header nav links that were buttons behave as links (keeps original structure) ===== */
/* Note: you already have <a href="..."> so nothing to convert; kept for safety */

/* ===== Optional: add small accessible keyboard trigger for island show on focus of nav links ===== */
document.querySelectorAll('.nav-btn').forEach(a=>{
  a.addEventListener('focus', ()=> showIsland(a.textContent.trim()));
  a.addEventListener('mouseenter', ()=> showIsland(a.textContent.trim()));
});








// المودال
const payBtn = document.getElementById('payBtn');
const glassCard = document.getElementById('glassCard');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeGlassCard');

payBtn.addEventListener('click', function(e){
    e.preventDefault();
    overlay.style.display = 'block';
    glassCard.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function(){
    overlay.style.display = 'none';
    glassCard.style.display = 'none';
    document.body.style.overflow = '';
});





