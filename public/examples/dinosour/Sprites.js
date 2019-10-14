import { canvas, physics } from 'the-game';

const PVector = physics.Vector;

const dinoSprittes = (screen, image) => {
  const sprites = {};

  sprites.dinoStart = new canvas.Sprite(
    screen,
    image,
    new PVector(70, 0),
    100,
    100
  );

  sprites.dinoBothLegDown = new canvas.Sprite(
    screen,
    image,
    new PVector(800, 0),
    50,
    100
  );

  sprites.dinoLeftLegUp = new canvas.Sprite(
    screen,
    image,
    new PVector(800, 0),
    50,
    100
  );

  sprites.dinoRightLegUp = new canvas.Sprite(
    screen,
    image,
    new PVector(800, 0),
    50,
    100
  );


  sprites.treeOne = new canvas.Sprite(
    screen,
    image,
    new PVector(750, 0),
    50,
    100
  );

  sprites.treeTwo = new canvas.Sprite(
    screen,
    image,
    new PVector(546, 0),
    70,
    70
  );

  sprites.treeThree = new canvas.Sprite(
    screen,
    image,
    new PVector(850, 0),
    105,
    100
  );

  sprites.treeFour = new canvas.Sprite(
    screen,
    image,
    new PVector(800, 0),
    155,
    100
  );

  sprites.ground = new canvas.Sprite(
    screen,
    image,
    new PVector(0, 100),
    2400,
    50
  );

  sprites.cloud = new canvas.Sprite(
    screen,
    image,
    new PVector(170, 0),
    100,
    100
  );

  return sprites;
}

export default dinoSprittes;