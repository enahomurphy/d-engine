import Segment from './Segment';

class Circle {
  constructor(canvas, x, y, radius) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.radius = radius;
    this.radiusLine = new Segment(canvas, x, y, this.radius , 0);
  }

  draw(fill = 'black', strokeColor, strokeWidth = 0) {
    if (!strokeColor) {
      strokeColor = fill;
    }
    this.canvas
      .circle(this.x, this.y, this.radius)
      .fill(fill)
      .stroke(strokeColor, strokeWidth);

      this.radiusLine.draw('blue');
  }

  pointInCircle(px, py) {
    const line = new Segment(this.canvas, px, py, this.x - px,  this.y - py);
  
    if (line.length() <= this.radiusLine.length()) {
      return true;
    }

    return false;
  }

  
}

export default Circle;