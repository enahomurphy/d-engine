import Vector from '../physics/Vector';

class Segment {
  constructor(canvas, x, y, vx, vy) {
    this.position = new Vector(x, y);
    this.vector = new Vector(vx + x, vy + y);
    this.vecx = vx;
    this.vecy = vy;

    this.canvas = canvas;
  }

  draw(fill = 'black', strokeColor, strokeWidth = 1) {
    if (!strokeColor) {
      strokeColor = fill;
    }
    this.canvas
      .segment(
        this.position.x,
        this.position.y,
        this.vector.x,
        this.vector.y
      )
      .fill(fill)
      .stroke(strokeColor, strokeWidth);

    return this;
  }

  hypot() {  
    return Vector.createVector(this.vecx, this.vecy);
  }

  length() {
    return this.hypot().mag();
  }

  normalize() {
  }

  center() {
    const dx = (this.vector.x + this.position.x) * 0.5;
    const dy = (this.vector.y + this.position.y) * 0.5;

    return new Vector(dx, dy)
  }

  unit() {
    const uv = Vector.div(this.vector, this.length());
    return new Segment(this.canvas, 0, 0, uv.x, uv.y);
  }
}

export default Segment;