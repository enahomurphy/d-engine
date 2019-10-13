class Point {
  constructor(canvas, x, y) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
  }

  draw(fill = 'black') {
    this.canvas
      .point(this.x, this.y, 1)
      .stroke(fill)
  }
}

export default Point;