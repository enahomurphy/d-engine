import { random } from '../utils'

class Canvas {
  constructor(width, height, id) {
    this.width = width || 500;
    this.height = height || 500;
    this.id = id || `the-game${random(0, 10)}`
    this.canvas = this.canvasDocument;
  }

  get context() {
    return this.canvas.getContext('2d');
  }

  get canvasDocument() {
    const canvas = document.getElementById(this.id);
    if (canvas) {
      return canvas;
    }

    return this.createCanvas(this.id, this.width, this.height);
  }

  createCanvas(id, width, height) {
    const canvas = document.createElement('canvas');    

    canvas.setAttribute('id', id);
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    document.body.appendChild(canvas);

    return canvas;
  }

  background(color = 'ffffff') {
    const ctx = this.context;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  stroke(style = '#000000', width = 1) {
    const ctx = this.context;
    ctx.strokeStyle = style;
    ctx.lineWidth = width;
    ctx.stroke();
  }

  fill(value = '#ffffff') {
    const ctx = this.context;
    ctx.fillStyle = value;
    ctx.fill();

    return this;
  }

  close() {
    const ctx = this.context;
    ctx.closePath();
    return this;
  }



  /**
   * This draws a circle on the canvas base on the x y d values
   * @param {number} x Number: x-coordinate of the centre of the circle. 
   * @param {*} y Number: y-coordinate of the centre of the circle.
   * @param {*} d Number: diameter of the circle.
   */
  circle(x, y, d) {
    const ctx = this.context;
    ctx.beginPath()
    ctx.arc(x, y, d, 0, Math.PI * 2);
    return this;
  }

  stroke(color = '#000000') {
    const ctx = this.context;
    ctx.strokeStyle  = color;
    ctx.stroke();

    return this;
  }

  strokeWidth(width = 2) {
    const ctx = this.context;
    ctx.lineWidth = width;

    return this
  }

  point(x, y) {
    const ctx = this.context;
    ctx.fillRect(x, y, 1, 1);

    return this
  }

  /**
   * This uses two  bezierCurveTo pinned
   * to each other ro achieve an eclipse
   * @param {number} x Number: x-coordinate of the centre of the circle. 
   * @param {number} y Number: y-coordinate of the centre of the circle.
   * @param {number} height Number: Height of the eclipse
   * @param {number} height Number: Width of the eclipse
   */
  ellipse(x, y, height, width) {
    const ctx = this.context;
    ctx.beginPath();
    ctx.moveTo(x, y - (height / 2));
    ctx.bezierCurveTo(
      x + (height * 0.5), y - (height * 0.5),
      x + (width * 0.5), y + (height * 0.5),
      x, y + (height  * 0.5)
    );

    ctx.bezierCurveTo(
      x - (height * 0.5), y + (height * 0.5),
      x - (width * 0.5), y - (height * 0.5),
      x, y - (height  * 0.5)
    );

    return this;
  }
}

export default Canvas;