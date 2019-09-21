
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
    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;

    return this;
  }

  static createVector(x, y) {
    return new Vector(x, y);
  }
}

export default Vector;