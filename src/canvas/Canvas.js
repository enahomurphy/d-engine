import { random } from '../utils';
import Circle from './Circle';
import Segment from './Segment';
import Point from './Point';
import Rectangle from './Rectangle';

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

    return this;
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

  circle(x, y, d) {
    const ctx = this.context;
    ctx.beginPath()
    ctx.arc(x, y, d, 0, Math.PI * 2, true);
    return this;
  }

  strokeWidth(width = 2) {
    const ctx = this.context;
    ctx.lineWidth = width;

    return this
  }

  point(x, y) {
    return this.circle(x, y, 1);
  }

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

  rect(x, y, w, h) {
    const ctx = this.context;
    ctx.beginPath();
    ctx.rect(x,y, w, h);

    return this;
  }

  segment(x1, y1, x2, y2) {
    const ctx = this.context;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    return this;
  }

  createCircle(x, y, c) {
    return new Circle(this, x, y, c);
  }

  createSegment(x, y, vx, vy) {
    return new Segment(this, x, y, vx, vy);
  }

  createPoint(x, y) {
    return new Point(this, x, y);
  } 

  createRectangle(x, y, width, height) {
    return new Rectangle(this, x, y, width, height);
  } 
}

export default Canvas;