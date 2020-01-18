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
      .circle(this.x, this.y, 50)
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

  move() {
    // this.x += 1;
    this.y -= 1;
  }
}

const walker = new Walker(gameScreen);

function loop() {
  gameScreen.background('black');

  walker.draw();
  walker.move();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);