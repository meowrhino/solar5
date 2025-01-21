// mode5.js

let terrainState = 0;
const terrain = document.getElementById('terrain');

function customizeTerrain() {
  terrainState = (terrainState + 1) % 3;
  switch (terrainState) {
    case 0:
      terrain.style.borderRadius = '20px';
      terrain.style.background = '#654321'; // marrón clásico
      break;
    case 1:
      terrain.style.borderRadius = '50%';
      terrain.style.background = '#997950'; // un tono más claro
      break;
    case 2:
      terrain.style.borderRadius = '0';
      terrain.style.background = '#4a3018'; // marrón más oscuro
      break;
  }
}
