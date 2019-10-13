import { canvas, utils, engine } from 'the-game';

const world = new canvas.Canvas(509, 500);
const { mouse  } = utils;

function draw() {
  world.background('gray');

  const { mouseX, mouseY } = mouse(world.id);

  const rect1 = world.createRectangle(0, 50, 100, 50);
  rect1.draw('white', 'black');

  const rect2 = world.createRectangle(mouseX, mouseY, 100, 50);
  rect2.draw('white', 'black');


  if(rect1.rectangleInside(rect2)) {
    rect1.draw('green', 'green');
    rect2.draw('green', 'green');
  }
}

engine.gameLoop(
  50,
  { draw }
)