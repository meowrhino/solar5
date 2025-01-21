// main.js

let currentSlide = 0;

function goToSlide(index) {
  currentSlide = index;
  const slider = document.getElementById('slider');
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

// Iniciar en la primera sección cuando cargue la página
window.addEventListener('load', () => {
  goToSlide(0);
});
