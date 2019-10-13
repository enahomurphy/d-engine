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
}

export default Rectangle;