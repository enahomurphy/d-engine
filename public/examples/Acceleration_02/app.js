import { canvas, physics, utils, engine } from '../../../index';

const gameScreen = new canvas.Canvas(650, 360);

class Walker {
  constructor(canvas) {
    this.velocity = physics.Vector.createVector(0, 0)
    this.pos = physics.Vector.createVector(
      canvas.width * 0.5,
      canvas.height * 0.5,
    )

    this.canvas = canvas;
  }

  draw() {
    this.canvas
      .circle(this.pos.x, this.pos.y, 20)
      .fill('black')
  }

  step() {
    const mouse = utils.mouse(this.canvas.id);
    const mouseVector = physics.Vector.createVector(mouse.mouseX, mouse.mouseY);
    this.acc = physics.Vector.sub(mouseVector, this.pos);
    this.acc.setMag(0.1)


    this.velocity.add(this.acc);
    this.pos.add(this.velocity);
  }
}

const walker = new Walker(gameScreen);


function draw() {
  gameScreen.background('#5b5b5b');
  walker.draw();
  walker.step();
}

const Loop = new engine.GameLoop({ fps: 60 });
Loop.load(draw).start()
