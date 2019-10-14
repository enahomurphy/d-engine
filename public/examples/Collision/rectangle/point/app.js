import { canvas, utils, physics, engine } from 'the-game';

const world = new canvas.Canvas(509, 500);
const { mouse  } = utils;

const Vector = physics.Vector;

function draw() {
  world.background('gray');

  const { mouseX, mouseY } = mouse(world.id);

  const rect1 = world.createRectangle(new Vector(0, 200), 100, 50);
  rect1.draw('white', 'black')

  const point = world.createPoint(new Vector(mouseX, mouseY));

  if (rect1.pointInside(point)) {
    rect1.draw('green');
  }
}

const Loop = new engine.GameLoop({ fps: 60 });
Loop.load(draw).start()
