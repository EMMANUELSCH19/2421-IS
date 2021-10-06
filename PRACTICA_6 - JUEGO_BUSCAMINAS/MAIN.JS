(function() {
    var minesCount = 25;
    var tableroWidth = 12;
    var tableroHeight = 12;
    var squareSize = 32;
    var fontSize = (squareSize * 0.5);
    var clickModo = 'normal';
    var canvas;
    var context;
    var tablero;
    var aroundOffsets = [
      [-1, -1], [0, -1], [1, -1],
      [-1,  0],          [1,  0],
      [-1,  1], [0,  1], [1,  1],
    ];
    var crossOffsets = [
      [0, -1], [-1,  0], [1,  0], [0,  1]
    ];
    var numberColors = [
      'transparent',
      'green',
      'blue',
      'magenta',
      'red',
      'purple',
      'orange',
      'steelblue',
      'black'
    ];
  
    var Square = function() {
      this.isMine = false;
      this.counter = 0;
      this.isCovered = true;
      this.isFlagged = false;
    };
  
    function createCanvas() {
      var e = document.createElement('canvas');
      e.width = tableroWidth * squareSize;
      e.height = tableroHeight * squareSize;
      document.getElementById('tablero').appendChild(e);
      return e;
    }
  
    function randomPosition() {
      return [
        parseInt(Math.floor(Math.random() * tableroWidth)),
        parseInt(Math.floor(Math.random() * tableroHeight)),
      ];
    }
  
    function prepareTablero() {
      const length = tableroWidth * tableroHeight;
  
      tablero = [];
      while (tablero.length < length) {
        tablero.push(new Square());
      }
  
      for (let idx = 0; idx < minesCount; idx++) {
        let [x, y] = randomPosition();
        let index = x + (y * tableroWidth);
  
        if (!tablero[index].isMine) {
          tablero[index].isMine = true;
          iterateAround(x, y, (e) => {
            if (!e.isMine) {
              e.counter += 1;
            }
          });
        } else {
          idx--;
        }
      }
    }
  
    function iterateAround(x, y, fn) {
      aroundOffsets.forEach(function(o) {
        const [ox, oy] = o;
        const ax = x + ox;
        const ay = y + oy;
        const index = ax + (ay * tableroWidth);
  
        if (ax < tableroWidth && ax >= 0
          && ay < tableroHeight && ay >= 0
        ) {
          fn(tablero[index], ax, ay);
        }
      });
    }
  
    function drawMine(x, y) {
      context.fillStyle = 'black';
      context.fillRect(x, y,
        squareSize, squareSize
      );
  
      context.fillStyle = 'red';
      context.beginPath();
      context.arc(x + squareSize / 2, y + squareSize / 2,
        squareSize * 0.25,
        0, Math.PI * 2, 0
      );
      context.fill();
    }
  
    function drawFlag(x, y) {
      context.lineWidth = 2;
      context.fillStyle = 'green';
      context.beginPath();
      context.arc(x + squareSize / 2, y + squareSize / 2,
        squareSize * 0.25,
        0, Math.PI * 2, 0
      );
      context.fill();
    }
  
    function drawGrid() {
      context.strokeStyle = '#444';
      context.lineWidth = 2;
      for (let idx = 1; idx < tableroWidth; idx++) {
        context.moveTo(idx * squareSize, 0);
        context.lineTo(idx * squareSize, squareSize * tableroHeight);
        context.stroke();
      }
      for (let idx = 1; idx < tableroHeight; idx++) {
        context.moveTo(0, idx * squareSize);
        context.lineTo(squareSize * tableroHeight, idx * squareSize);
        context.stroke();
      }
    }
  
    function drawTablero() {
      context.clearRect(0, 0, 640, 640);
  
      tablero.forEach(function(e, index) {
        const x = index % tableroWidth;
        const y = Math.floor(index / tableroWidth);
        const ax = x * squareSize;
        const ay = y * squareSize;
  
        if (e.isCovered) {
          context.strokeStyle = '#444';
          context.fillStyle = '#1FFF8A';
          context.fillRect(
            x * squareSize,
            y * squareSize,
            squareSize,
            squareSize
          );
  
          if (e.isFlagged) {
            drawFlag(ax, ay);
          }
        } else if (e.isMine) {
          drawMine(ax, ay);
        } else {
          const text = e.counter.toString();
          const charSize = context.measureText(text);
  
          context.fillStyle = numberColors[e.counter];
          context.fillText(text,
            ax + (squareSize / 2 - charSize.width / 2),
            ay + (squareSize / 2 - fontSize / 2)
          );
        }
      });
  
      drawGrid();
    }
  
    function onLoad() {
      canvas = createCanvas();
      context = canvas.getContext('2d');
      context.textBaseline = 'top';
      context.font = `bold ${fontSize}px Arial`;
  
      document.querySelectorAll('input[type=radio]').forEach((e, idx) => {
        if (idx === 0) {
          e.checked = true;
        }
        e.addEventListener('change', (evt) => {
          clickModo = evt.target.value;
        });
      });
  
      canvas.addEventListener('mousedown', onMouseDown);
  
      prepareTablero();
      drawTablero();
    }
  
    function revealAround(x, y) {
      iterateAround(x, y, (e) => {
        if (!e.isFlagged && e.isCovered) {
          e.isCovered = false;
        }
      });
  
      drawTablero();
    }
  
    function revealEmpty(x, y) {
      const queue = [[x, y]];
  
      while (queue.length > 0) {
        const [cx, cy] = queue.shift();
        iterateAround(cx, cy, (e, x, y) => {
          if (e.isCovered && !e.isFlagged) {
            e.isCovered = false;
            if (e.counter === 0) {
              queue.push([x, y]);
            }
          }
        });
      }
    }
  
    function onMouseDown(e) {
      const ax = e.clientX - canvas.offsetLeft;
      const ay = e.clientY - canvas.offsetTop;
      const x = parseInt(Math.floor(ax / squareSize));
      const y = parseInt(Math.floor(ay / squareSize));
  
      if (x >= 0 && x < tableroWidth
        && y >= 0 && y < tableroHeight
      ) {
        const index = x + (y * tableroWidth);
        const e = tablero[index];
  
        if (clickModo === 'discover') {
          if (!e.isCovered && e.counter > 0) {
            revealAround(x, y);
          }
        } else if (clickModo === 'flag') {
          e.isFlagged = !e.isFlagged;
        } else  if (clickModo === 'normal') {
          if (e.isCovered) {
            if (e.counter === 0) {
              e.isCovered = false;
              if (!e.isMine) {
                revealEmpty(x, y);
              }
            } else {
              e.isCovered = false;
            }
          } 
        }
      }
  
      drawTablero();
    }
  
    window.addEventListener('load', onLoad);
  })(); 