import { physics, canvas } from 'the-game';

const brickRowCount = 3;
const brickColumnCount = 6;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 18;
const brickOffsetTop = 60;
const brickOffsetLeft = 30;

const PVector = physics.Vector;

class Brick extends canvas.Rectangle {
  constructor(canvas, x, y) {
    super(
      canvas,
      new PVector(x, y),
      brickWidth,
      brickHeight
    );

    this.active = true;
  }
}

function Bricks (canvas, ball, board) {
  this.bricks = [];
  this.canvas = canvas;
  this.ball = ball;
  this.board = board
  this.counter = brickRowCount * brickColumnCount

  return this;
}

Bricks.prototype.create = function() {
  this.bricks = [];
  for(let count = 0; count < brickRowCount; count += 1) {
    this.bricks.push([]);
    for(let columnCount = 0; columnCount < brickColumnCount; columnCount += 1) {
      if (columnCount === 0) {
        this.bricks[count].push(
          new Brick(this.canvas, brickOffsetLeft, brickOffsetTop * (count + 1))
        )
      } else {
        this.bricks[count].push(
          new Brick(
            this.canvas, 
            (this.bricks[count][columnCount - 1].position.x + brickPadding + brickWidth),
            brickOffsetTop * (count + 1)
          )
        )
      }
    }
  }
}

Bricks.prototype.draw = function(color) {
  for(let count = 0; count < this.bricks.length; count += 1) {
    for (let brickCount = 0; brickCount < this.bricks[count].length; brickCount += 1) {
      const currentBrick = this.bricks[count][brickCount];
      if (currentBrick.active) {
        currentBrick.draw(color);
        if (currentBrick.circleInRectangle(this.ball)) {
          this.ball.stop();
          this.board.updateScore();
          this.counter -= 1;
          currentBrick.active = false;
        };
      } 
    }
  }
};


Bricks.prototype.resetCounter = function() {
  this.counter = brickRowCount * brickColumnCount;
}

export default Bricks;