class Rectangle {
  constructor(canvas, position, width, height) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.canvas = canvas;
  }

  draw(fill = 'black', strokeColor, strokeWidth = 0) {
    if (!strokeColor) {
      strokeColor = fill;
    }

    this.canvas
      .rect(this.position.x, this.position.y, this.width, this.height)
      .fill(fill)
      .stroke(strokeColor, strokeWidth);
  }

  pointInside(point) {
    if ((point.x >= this.x) && point.x <= (this.position.x + this.width)) {
      if (point.y >= this.y && point.y <=  this.position.y + this.height) {
        return true;
      }
      return false
    }

    return false;
  }


  // Is the RIGHT edge of r1 to the RIGHT of the LEFT edge of r2?
  // Is the LEFT edge of r1 to the LEFT of the RIGHT edge of r2?
  // Is the BOTTOM edge of r1 BELOW the TOP edge of r2?
  // Is the TOP edge of r1 ABOVE the BOTTOM edge of r2?
  rectangleInside(react) {
    if (
      this.position.x < react.position.x + react.width &&
      this.position.x + this.width > react.position.x &&
      this.position.y < react.position.y + react.height &&
      this.position.y + this.height > react.position.y
    ) {
      return true;
    }

    return false;
  }

  // If the circle is to the RIGHT of the square, check against the RIGHT edge.
  // If the circle is to the LEFT of the square, check against the LEFT edge.
  // If the circle is ABOVE the square, check against the TOP edge.
  // If the circle is to the BELOW the square, check against the BOTTOM edge.
  circleInRectangle(circle) {
    let x = circle.position.x;
    let y = circle.position.y;

    if (circle.position.x < this.position.x) x = this.position.x;
    else if (circle.position.x > this.position.x + this.width) x = this.position.x + this.width;

    if (circle.position.y < this.position.y) y = this.position.y;
    else if (this.position.y > this.position.y + this.height) y = this.position.x + this.width;

    const distX = circle.position.x - x;
    const distY = circle.position.y - y;
    const distance = Math.hypot(distX, distY);

    return (distance <= circle.radius);
  }
}

export default Rectangle;