// mode1.js

function addWater(plantEl) {
    let waterCount = parseInt(plantEl.getAttribute('data-water'), 10);
    let sunCount   = parseInt(plantEl.getAttribute('data-sun'), 10);
  
    waterCount++;
    plantEl.setAttribute('data-water', waterCount);
  
    checkBloom(plantEl, waterCount, sunCount);
  }
  
  function addSun(event, plantEl) {
    // Evita que se active addWater() en el onclick del contenedor
    event.stopPropagation();
  
    let waterCount = parseInt(plantEl.getAttribute('data-water'), 10);
    let sunCount   = parseInt(plantEl.getAttribute('data-sun'), 10);
  
    sunCount++;
    plantEl.setAttribute('data-sun', sunCount);
  
    checkBloom(plantEl, waterCount, sunCount);
  }
  
  function checkBloom(plantEl, water, sun) {
    const threshold = 3;
    if ((water + sun) >= threshold) {
      plantEl.classList.add('blooming');
      drawBloomPattern(plantEl.querySelector('.bloomCanvas'));
    }
  }
  
  /* Genera un patrón aleatorio en el canvas de la planta */
  function drawBloomPattern(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
  
    // Limpia el canvas
    ctx.clearRect(0, 0, w, h);
  
    // Dibujar "pétalos" aleatorios
    const petals = 4 + Math.floor(Math.random() * 5); // 4 a 8
    for (let i = 0; i < petals; i++) {
      const hue = Math.floor(Math.random() * 360);
      ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
      ctx.beginPath();
  
      const radius = 10 + Math.random() * 20;
      const x = Math.random() * w;
      const y = Math.random() * h;
  
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  