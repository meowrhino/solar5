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

document.addEventListener("DOMContentLoaded", function() {
  loadModeContent(0);
  loadModeContent(1);
  loadModeContent(2);
  loadModeContent(3);
  loadModeContent(4);
});

function loadModeContent(modeIndex) {
  fetch(`src/mode${modeIndex + 1}.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById(`mode${modeIndex + 1}`).innerHTML = data;
    })
    .catch(error => console.error('Error loading mode content:', error));
}
