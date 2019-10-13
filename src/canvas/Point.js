class Point {
  constructor(canvas, position) {
    this.position = position;
    this.canvas = canvas;
  }

  draw(fill = 'black') {
    this.canvas
      .point(this.position.x, this.position.y, 1)
      .stroke(fill)
  }
}

export default Point;