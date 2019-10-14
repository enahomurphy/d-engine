import { physics, canvas } from 'the-game';

const PVector = physics.Vector;

class Trex extends canvas.Rectangle {
  constructor(canvas, x, y, width, height) {
    super(
      canvas,
      new PVector(x, y),
      width,
      height
    );

    this.canvas = canvas;
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.gravity = new PVector(0, 1.5);
  }

  jump() {
    if (this.position.y === (this.canvas.height - this.height)) {
      this.acceleration = new PVector(0, -25);
    }
  }

  checkEdge() {
    const edgeY = this.canvas.height - this.height;
    if (this.position.y > edgeY) {
      this.position.y = edgeY;
    }
  }

  move() {
    this.position.add(this.acceleration);
    this.acceleration.add(this.gravity);
    
    this.checkEdge();
  }

  draw(sprite) {
    sprite.draw(this.position, this.width, this.height);
  }
}

export default Trex;