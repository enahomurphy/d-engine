
/**
 * This represent the differences between two space
 * The vector specifies how and entity gets from point a
 * to point be
 * 
 * This simply just stores 
 */
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x = this.x + vector.x;
    this.y = this.y + vector.y;

    return this;
  }

  sub(vector) {
    this.x = this.x - vector.x;
    this.y = this.y - vector.y;

    return this;
  }

  mult(magnitude) {
    this.y = this.y * magnitude;
    this.x = this.x * magnitude;
  }

  div(magnitude) {
    this.x = this.x / magnitude;
    this.y = this.y / magnitude;
  }
  
  mag() {
    return Math.hypot(this.x, this.y);
  }

  setMag(magnitude) {
    this.normalize()
    this.mult(magnitude)
  }

  normalize() { 
    const m = this.mag();
    if (m > 0) {
      this.div(m);
    }
  }

  log(value = '') {
    console.log(this.x, this.y, value)
  }

  static createVector(x, y) {
    return new Vector(x, y);
  }

  static sub(vector1, vector2) {
    const x = vector1.x - vector2.x;
    const y = vector1.y - vector2.y;

    return new Vector(x, y);
  }

  static add(vector1, vector2) {
    const x = vector1.x + vector2.x;
    const y = vector1.y + vector2.y;

    return new Vector(x, y);
  }

  static div(vector, magnitude) {
    const newVector = Vector.createVector(vector.x, vector.y);

    newVector.div(magnitude);

    return newVector;
  }

  static mult(vector, magnitude) {
    const newVector = Vector.createVector(vector.x, vector.y);

    newVector.mult(magnitude);

    return newVector;
  }

  static normalize(x, y) { 
    const newVector = new Vector(x, y);
    newVector.normalize();
    
    return newVector;
  }
}

export default Vector;