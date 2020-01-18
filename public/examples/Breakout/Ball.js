import { physics, canvas } from 'the-game';

const PVector = physics.Vector;
const ballWidth = 10;

class Ball extends canvas.Circle {
  constructor(canvas) {
    super(
      canvas,
      new PVector(canvas.width / 2, canvas.height - (ballWidth + 15)),
      10
    );
      
    this.canvas = canvas;
    this.velocity = new PVector(4, 4);
  }

  move() {
    this.position.add(this.velocity);

    if (this.position.x > (this.canvas.width - this.radius) || this.position.x < this.radius) {
      this.velocity.x = this.velocity.x * -1;
    }

    if (this.position.y > (this.canvas.height - this.radius) || this.position.y < this.radius) {
      this.velocity.y = this.velocity.y  * -1;
    }
  }

  stop() {
    this.velocity.y = this.velocity.y  * -1;
  }

  reset() {
    this.position = new PVector(canvas.width / 2, canvas.height - 25)
  }

  isEnd() {
    return (this.position.y >= (this.canvas.height - ballWidth));
  }
}

export default Ball;