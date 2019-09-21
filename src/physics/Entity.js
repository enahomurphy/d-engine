
import Collision from './Collision'

class Entity extends Collision {
  constructor(collisionName, type) {
    this.type = type || Entity.DYNAMIC;
    this.collision = collisionName || Entity.ELASTIC;

    this.width = 20;
    this.height = 20;


    this.halfWidth = 20 * .5;
    this.halfheight = 20 * .5;

    this[this.collision]()

    this.x = 0;
    this.y = 0;

    this.vx = 0;
    this.vy = 0;

    this.ax = 0;
    this.ay = 0;

    this.updateBounds();
  }

  static get DISPLACE () {
    return 'displace';
  }

  static get DYNAMIC () {
    return 'dynamic';
  }

  static get KINEMATIC () {
    return 'kinematic';
  }

  static get ELASTIC () {
    return 'elastic';
  }
  static get KINEMATIC () {
    return 'kinematic';
  }

  updateBounds() {
    this.halfWidth = this.width * .5;
    this.halfheight = this.halfheight * .5;
  }

  get midX() {
    return this.halfWidth * this.x;
  }

  get midY() {
    return this.halfheight * this.y;
  }

  get top() {
    return this.y;
  }

  get left() {
    return this.x;
  }

  get right() {
    return this.x + this.width;
  }

  get bottom() {
    return this.y + this.height;
  }
};

export default Entity;