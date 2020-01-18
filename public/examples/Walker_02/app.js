import { canvas, physics } from 'the-game';

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
      .circle(this.pos.x, this.pos.y, 20)
      .fill('#ffffff');
  }

  step() {
    this.pos.add(this.velocity);

    if (this.pos.x > (this.canvas.width - 20) || this.pos.x < 20) {
      this.velocity = physics.Vector.createVector((this.velocity.x * -1), this.velocity.y)
    }

    if (this.pos.y > (this.canvas.height - 20) || this.pos.y < 20) {
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