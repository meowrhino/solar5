// mode2.js

// Referencias globales
let firstNode = null;

const energySvg = document.getElementById('energySvg');
const nodes = document.querySelectorAll('#mode2 .node');

// Asignar evento clic a cada nodo
nodes.forEach(node => {
  node.addEventListener('click', () => {
    if (!firstNode) {
      // Primer clic
      firstNode = node;
      node.style.background = 'yellow';
    } else {
      // Segundo clic -> dibujamos la línea
      if (node !== firstNode) {
        drawEnergyLine(firstNode, node);
      }
      // Resetear
      firstNode.style.background = '#fff';
      firstNode = null;
    }
  });
});

function drawEnergyLine(nodeA, nodeB) {
  const cRect = document.getElementById('energyContainer').getBoundingClientRect();

  // Posiciones absolutas de cada nodo
  const aRect = nodeA.getBoundingClientRect();
  const bRect = nodeB.getBoundingClientRect();

  // Centro de cada nodo
  const ax = aRect.left + aRect.width / 2 - cRect.left;
  const ay = aRect.top + aRect.height / 2 - cRect.top;
  const bx = bRect.left + bRect.width / 2 - cRect.left;
  const by = bRect.top + bRect.height / 2 - cRect.top;

  // Creamos una <line> en SVG
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', ax);
  line.setAttribute('y1', ay);
  line.setAttribute('x2', bx);
  line.setAttribute('y2', by);
  line.classList.add('energy-path');

  energySvg.appendChild(line);
}
