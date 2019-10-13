import { physics, utils, canvas } from 'the-game';

const PVector = physics.Vector;

class Trex extends canvas.Rectangle {
  constructor(canvas, x, y, width, height) {
    super(canvas, x, y, width, height)

    this.height = 100,
    this.width = 20;
    this.canvas = canvas;
    this.pos = new PVector(20, canvas.height - this.height);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.gravity = new PVector(0, 1.5);
  }

  jump() {
    if (this.pos.y === (this.canvas.height - this.height)) {
      this.acceleration = new PVector(0, -25);
    }
  }

  checkEdge() {
    const edgeY = this.canvas.height - this.height;
    if (this.pos.y > edgeY) {
      this.pos.y = edgeY;
    }
  }

  move() {
    this.pos.add(this.acceleration);
    this.acceleration.add(this.gravity);
    
    this.checkEdge();
  }

  draw() {
    this.x = this.pos.x;  
    this.y = this.pos.y;
    super.draw('white');
  }
}

export default Trex;