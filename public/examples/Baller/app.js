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

}

Ball.prototype.applyForce = function (force) {
  const vecctorForce = PVector.div(force, this.mass);
  this.acceleration.add(vecctorForce);
}

Ball.prototype.draw = function () {
  screen
  .ellipse(
    this.position.x,
    this.position.y,
    this.mass * 16,
    this.mass * 16
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

  if (this.position.x < 0) {
    x = 1;
  } else if (this.position.x > (width - (this.mass * 16))) {
    x = -1;
  }

  if (this.position.y < 0) {
    y = 1;
  } else if (this.position.y > height) {
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
function draw() {
  screen.background('white');
  
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
}

const Loop = new engine.GameLoop({ fps: 60 });
Loop.load(draw).start()
