import { canvas, physics, utils, engine } from 'the-game';
import Trex from './Trex';
import Tree from './Tree';

const screen = new canvas.Canvas(500, 500);
const width = screen.width;
const height = screen.height;
const PVector = physics.Vector;
const { color, random, keyboard } = utils;


const trex = new Trex(screen, 20, height - 100, 20, 100);
const tree = new Tree(screen, width, height - 100, 20, 100);

keyboard.keyPress((event) => {
  if (event.charCode === 32) {
    trex.jump();
  }
})

function draw() {
  screen.background('red');

  if (trex.rectangleInside(tree)) {
    tree.stop();
  }
  trex.draw();
  trex.move();

  tree.draw();
  tree.move();
}

engine.gameLoop(
  50,
  { draw }
)