import { canvas, physics } from '../index';

const gameScreen = new canvas.Canvas(500, 500);

window.gameScreen = gameScreen;
gameScreen.background('#5b5b5b;');

class Walker {
  constructor(canvas) {
    this.velocity = physics.Vector.createVector(1, 3.1)
    this.pos = physics.Vector.createVector(
      canvas.height * 0.5,
      canvas.width * 0.5,
    )

    this.canvas = canvas;
  }

  draw() {
    this.canvas
      .ellipse(this.pos.x, this.pos.y, 40, 40)
      .fill('#ffffff');
  }

  step() {
    this.pos.add(this.velocity);

    if (this.pos.x > (this.canvas.width - 10) || this.pos.x < 0) {
      this.velocity = physics.Vector.createVector((this.velocity.x * -1), this.velocity.y)
    }

    if (this.pos.y > (this.canvas.height - 10) || this.pos.y < 0) {
      this.velocity = physics.Vector.createVector(this.velocity.x, (this.velocity.y  * -1));
    }
  }
}

const walker = new Walker(gameScreen);

function loop() {
  gameScreen.background('#5b5b5b');

  walker.draw();
  walker.step();
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);