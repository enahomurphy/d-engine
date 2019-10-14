import { physics, canvas } from 'the-game';

const PVector = physics.Vector;

class Ground extends canvas.Rectangle {
  constructor(canvas, x, y, width, height) {
    super(
      canvas,
      new PVector(x, y),
      width,
      height
    );

    this.acceleration = new PVector(-3 , 0);
  }

  checkEdge() {
    if (this.checkEnd()) {
      this.position.x = this.width;
    }
  }

  checkEnd() {
    if (Math.abs(this.position.x) >= this.width) {
      return true;
    }

    return false;
  }


  move() {
    this.position.add(this.acceleration);
    this.checkEdge()
  }

  stop() {
    this.acceleration.mult(0)
  }

  draw(sprite) {
    sprite.draw(this.position, this.width, this.height);
  }
}

export default Ground;