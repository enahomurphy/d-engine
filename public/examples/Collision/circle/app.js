import { canvas, utils, engine } from 'the-game';

const world = new canvas.Canvas(509, 500);
const { mouse  } = utils;

function draw() {
  world.background('white');

  const { mouseX, mouseY } = mouse(world.id);

  const circe1 = world.createCircle(100, 200, 50);
  circe1.draw('red')
  const circe2 = world.createCircle(mouseX, mouseY, 40);
  circe2.draw('red')

  const line = world.createSegment(
    circe1.x, circe1.y, circe2.x - circe1.x, circe2.y - circe1.y
  );

  line.draw('green');

  if (line.length() <= circe2.radius + circe1.radius) {
    circe2.draw('green')
    circe1.draw('green')
  }
}

const Loop = new engine.GameLoop({ fps: 60 });
Loop.load(draw).start()
