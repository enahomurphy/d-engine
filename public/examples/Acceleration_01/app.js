import { canvas, physics, utils } from 'the-game';

const gameScreen = new canvas.Canvas(630, 500);

window.gameScreen = gameScreen;
gameScreen.background('#5b5b5b');

class Walker {
  constructor(canvas) {
    this.velocity = physics.Vector.createVector(0, 0)
    this.pos = physics.Vector.createVector(
      canvas.height * 0.5,
      canvas.width * 0.5,
    )

    this.canvas = canvas;
  }

  draw() {
    this.canvas
      .circle(this.pos.x, this.pos.y, 20)
      .fill('black')
  }

  step() {
    const ax = utils.random(-1, 1);
    const ay = utils.random(-1, 1);
    this.acc = physics.Vector.createVector(ax, ay);
    this.acc.div(5);

    this.velocity.add(this.acc);
    this.pos.add(this.velocity);
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