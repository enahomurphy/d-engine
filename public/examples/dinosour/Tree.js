import { physics, canvas } from 'the-game';

const PVector = physics.Vector;

class Tree extends canvas.Rectangle {
  constructor(canvas, x, y, width, height) {
    super(
      canvas,
      new PVector(x, y),
      width,
      height
    );
    this.acceleration = new PVector(-3 , 0);
  }

  isEdge() {
    return (this.position.x <= this.width * -1);
  }

  move() {
    this.position.add(this.acceleration);
  }

  stop() {
    this.acceleration.mult(0)
  }

  draw(sprite) {
    sprite.draw(this.position, this.width, this.height);
  }
}

export default Tree;