/* ══════════════════════════════════════════════════
   Primera Presentación de Proyecto — ILM 7mo Informática 2026
   Caso: SensorOffice (Valeria Gómez — Estudio Contable Gómez, Caseros)
   script.js — lógica de navegación y animaciones
══════════════════════════════════════════════════ */

'use strict';

/* ── REFERENCIAS AL DOM ── */
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
let current = 0;
let isAnimating = false;

// Build dots
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goTo(i);
  dotsContainer.appendChild(dot);
});

function updateUI() {
  const dots = document.querySelectorAll('.nav-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
  progressText.textContent = `${current + 1} / ${slides.length}`;
  const pct = ((current + 1) / slides.length) * 100;
  progressBar.style.width = pct + '%';
  btnPrev.disabled = current === 0;
  btnNext.disabled = current === slides.length - 1;
}

function goTo(index) {
  if (isAnimating || index === current) return;
  if (index < 0 || index >= slides.length) return;
  isAnimating = true;

  const prev = slides[current];
  const next = slides[index];

  prev.classList.add('exit');
  prev.classList.remove('active');

  setTimeout(() => {
    prev.classList.remove('exit');
    next.style.transform = index > current ? 'translateX(60px)' : 'translateX(-60px)';
    next.style.opacity = '0';
    next.classList.add('active');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        next.style.transform = '';
        next.style.opacity = '';
        setTimeout(() => { isAnimating = false; }, 450);
      });
    });
  }, 220);

  current = index;
  updateUI();
}

function changeSlide(dir) {
  goTo(current + dir);
}

// Keyboard
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault(); changeSlide(1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault(); changeSlide(-1);
  } else if (e.key === 'Escape') {
    goTo(0);
  }
});

// Touch/swipe
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) changeSlide(dx < 0 ? 1 : -1);
}, { passive: true });

updateUI();

