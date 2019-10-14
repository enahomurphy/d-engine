import { canvas } from 'the-game';

const gameScreen = new canvas.Canvas(500, 500);

window.gameScreen = gameScreen;
gameScreen.background('black');

class Walker {
  constructor(canvas) {
    this.x = canvas.width * 0.5;
    this.y = canvas.height * 0.5;
    this.canvas = canvas;
  }

  draw() {
    this.canvas
      .point(this.x, this.y)
      .fill('white');
  }

  step() {
    const random = parseInt(Math.random() * 4);
    switch (random) {
      case 0:
        this.x++;
        break;
      case 1:
        this.x--;
        break;
      case 2:
        this.y++;
        break;
      case 3:
        this.y--;
        break;
    }
  }
}

const walker = new Walker(gameScreen);

function loop() {
  walker.draw();
  walker.step();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);