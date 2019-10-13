class Rectangle {
  constructor(canvas, x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.canvas = canvas;
  }

  draw(fill = 'black', strokeColor, strokeWidth = 0) {
    if (!strokeColor) {
      strokeColor = fill;
    }

    this.canvas
      .rect(this.x, this.y, this.width, this.height)
      .fill(fill)
      .stroke(strokeColor, strokeWidth);
  }

  pointInside(point) {
    if ((point.x >= this.x) && point.x <= (this.x + this.width)) {
      if (point.y >= this.y && point.y <=  this.y + this.height) {
        return true;
      }
      return false
    }

    return false;
  }

  rectangleInside(react) {
    if (
      this.x < react.x + react.width &&
      this.x + this.width > react.x &&
      this.y < react.y + react.height &&
      this.y + this.height > react.y
    ) {
      return true;
    }

    return false;
  }
}

export default Rectangle;