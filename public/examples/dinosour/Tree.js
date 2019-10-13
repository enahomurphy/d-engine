import { physics, canvas } from 'the-game';

const PVector = physics.Vector;

class Tree extends canvas.Rectangle {
  constructor(canvas, x, y, width, height) {
    super(canvas, x, y, width, height);
    this.height = height;
    this.width = width;
    this.canvas = canvas;
    this.pos = new PVector(canvas.width - this.width, canvas.height - this.height);
    this.acceleration = new PVector(-3 , 0);
  }

  checkEdge() {
    if (this.pos.x < -100) {
      this.pos.x = this.canvas.width - this.width;
    }
  }

  move() {
    this.pos.add(this.acceleration);
    this.checkEdge();
  }

  stop() {
    this.acceleration.mult(0)
  }

  draw() {
    super.x = this.pos.x;
    super.y = this.pos.y;
    super.draw('white');
  }
}

export default Tree;