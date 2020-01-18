import { canvas, physics, utils, engine } from 'the-game';

const screen = new canvas.Canvas(500, 500);
const width = screen.width;
const height = screen.height;
const PVector = physics.Vector;
const { color, random } = utils;


function Ball(mass, x = 0, y = 0) {
  this.mass = mass;
  this.position = PVector.createVector(x, y);
  this.acceleration = PVector.createVector(0, 0);
  this.velocity = PVector.createVector(0, 0);
  this.color = color(random(255), random(255), random(255), 127);
  this.radius = this.mass * 6;
}

Ball.prototype.applyForce = function (force) {
  const vecctorForce = PVector.div(force, this.mass);
  this.acceleration.add(vecctorForce);
}

Ball.prototype.draw = function () {
  screen
  .circle(
    this.position.x,
    this.position.y,
    this.radius,
  )
  .fill(this.color)
  .stroke('black', 0)
}

Ball.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Ball.prototype.calculateWallForce = function() {
  let x = 0;
  let y = 0;

  if (this.position.x < this.radius) {
    x = 1;
  } else if (this.position.x > (width - this.radius)) {
    x = -1;
  }

  if (this.position.y < 100) {
    y = 1;
  } else if (this.position.y > height - 30) {
    y = -1;
  }

  return PVector.createVector(x, y);
}

document.getElementById(screen.id).addEventListener('click', () => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  balls.push(new Ball(random(1, 5), mouseX, mouseY))
});

const balls = Array(10).fill(1).map(() => new Ball(random(0.1, 5), 10, 10))
const ball = new Ball(1, screen.width /2, screen.height / 2)
function draw() {
  screen.background('lightGray');
  
  for (let ball = 0; ball < balls.length; ball++) {
    const force = PVector.createVector(0, 0.1);
    const wind = PVector.createVector(0.1, 0);
    const wallForce = balls[ball].calculateWallForce();
    balls[ball].applyForce(wind);
    balls[ball].applyForce(force);
    balls[ball].applyForce(wallForce);
    balls[ball].update();
    balls[ball].draw();
  }

  const gravity = PVector.createVector(0, 0.1);
  const wallForce = ball.calculateWallForce();

  ball.applyForce(wallForce);
  ball.applyForce(gravity);
  ball.update();
  ball.draw();
}

const Loop = new engine.GameLoop({ fps: 60 });
Loop.load(draw).start()
