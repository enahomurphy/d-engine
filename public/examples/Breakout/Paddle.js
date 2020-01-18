import { physics, canvas, utils } from 'the-game';

const PVector = physics.Vector;


class Paddle extends canvas.Rectangle {
  constructor(canvas) {
    super(
      canvas,
      new PVector((canvas.width - 70) / 2, canvas.height - 12),
      80,
      12
    );
  }

  moveLeft() {
    if (this.position.x > 0) {
      this.position.add(new PVector(-7, 0));
    }
  }

  moveRight() {
    if (this.position.x <= (this.canvas.width - this.width)) {
      this.position.add(new PVector(7, 0));
    }
  }
}

export default Paddle;