import { canvas, utils, engine } from 'the-game';
import Ball from './Ball';
import Paddle from './Paddle';
import Bricks from './Bricks';
import Board from './Board';

const { keyboard: { keyDown, keyUp }, mouse } = utils;
const screen = new canvas.Canvas(600, 400);
const Loop = new engine.GameLoop({ fps: 60 });
screen.background('#FAF6EE');

const board = new Board(screen);
const ball = new Ball(screen, 100, 100, 10);
const paddle = new Paddle(screen);
const bricks = new Bricks(screen, ball, board);

bricks.create();

let movePaddleft = false;
let movePaddleRight = false;

keyDown((event) => {
  if (event.key === 'ArrowRight') {
    movePaddleRight = true;
  }

  if (event.key === 'ArrowLeft') {
    movePaddleft = true;
  }
});

keyUp((event) => {
  if (event.key === 'ArrowRight') {
    movePaddleRight = false;
  }

  if (event.key === 'ArrowLeft') {
    movePaddleft = false;
  }
})

function draw() {
  screen.background('#FAF6EE');
  const { mouseX } = mouse();

  // if (!bricks.counter) {
  //   bricks.resetCounter();
  //   bricks.create();
  // }

  bricks.draw('#FAC450');

  ball.draw('#FAC450');
  ball.move();

  paddle.position.x = mouseX;
  paddle.draw('#FAC450');
  
  if (paddle.circleInRectangle(ball)) {
    ball.stop();
  }
  
  if (movePaddleft) {
    paddle.moveLeft();
  }

  if (movePaddleRight) {
    paddle.moveRight();
  }


  if (ball.isEnd()) {
    board.updateLives();
  }

  if(!board.lives) {
    board.gameOver();
    Loop.stop();
  }

  board.drawScore();
  board.drawLives();
}

Loop.load(draw).start();
