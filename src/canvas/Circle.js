import Segment from './Segment';

class Circle {
  constructor(canvas, vector, radius) {
    this.position = vector;
    this.radius = radius;
    this.radiusLine = new Segment(canvas, vector.x, vector.y, this.radius , 0);
  }

  draw(fill = 'black', strokeColor, strokeWidth = 0) {
    if (!strokeColor) {
      strokeColor = fill;
    }

    this.canvas
      .circle(this.position.x, this.position.y, this.radius)
      .fill(fill)
      .stroke(strokeColor, strokeWidth);
  }

  pointInCircle(px, py) {
    const line = new Segment(
      this.canvas,
      px,
      py,
      this.position.x - px, 
      this.position.y - py
    );
  
    if (line.length() <= this.radiusLine.length()) {
      return true;
    }

    return false;
  }

  rectInCircle(rectangle) {
    let x = this.position.x;
    let y = this.position.y;

    if (rectangle.position.x < rectangle.position.x) x = rectangle.position.x;
    else if (this.position.x > rectangle.position.x + rectangle.width) x = rectangle.position.x + rectangle.width;

    if (this.position.y < rectangle.position.y) y = rectangle.position.y;
    else if (rectangle.position.y > rectangle.position.y + rectangle.height) y = rectangle.position.x + rectangle.width;

    const distX = this.position.x - x;
    const distY = this.position.y - y;
    const distance = Math.hypot(distX, distY);

    return (distance <= this.radius);
  }
}

export default Circle;