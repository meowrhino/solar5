// mode3.js

// Referencias a elementos del DOM
const mode3  = document.getElementById('mode3');
const info   = document.getElementById('time-info');
const sunEl  = document.getElementById('sun');
const moonEl = document.getElementById('moon');
const stars  = document.getElementById('stars');

// Variable para indicar si es de día o de noche
let isDay = true;

// Generar estrellas de manera aleatoria (sólo una vez)
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top  = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  stars.appendChild(star);
}

function toggleDayNight() {
  if (isDay) {
    // Cambiar a noche
    mode3.style.background = '#2a2a6b';
    info.textContent = 'Ahora es de noche';
    sunEl.style.display = 'none';
    moonEl.style.display = 'block';
    stars.style.display = 'block';
  } else {
    // Cambiar a día
    mode3.style.background = '#ffd452';
    info.textContent = 'Ahora es de día';
    sunEl.style.display = 'block';
    moonEl.style.display = 'none';
    stars.style.display = 'none';
  }
  isDay = !isDay;
}
