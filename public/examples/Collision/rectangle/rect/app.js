import { canvas, utils, physics, engine } from 'the-game';

const world = new canvas.Canvas(509, 500);
const { mouse  } = utils;
const Vector = physics.Vector;

function draw() {
  world.background('gray');

  const { mouseX, mouseY } = mouse(world.id);

  const rect1 = world.createRectangle(new Vector(0, 50), 100, 50);
  rect1.draw('white', 'black');

  const rect2 = world.createRectangle(new Vector(mouseX, mouseY), 100, 50);
  rect2.draw('white', 'black');


  if(rect1.rectangleInside(rect2)) {
    rect1.draw('green', 'green');
    rect2.draw('green', 'green');
  }
}

const Loop = new engine.GameLoop({ fps: 60 });
Loop.load(draw).start()
