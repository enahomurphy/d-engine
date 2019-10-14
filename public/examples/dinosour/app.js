import { canvas, physics, utils, engine } from 'the-game';
import Trex from './Trex';
import Tree from './Tree';
import Ground from './Ground';
import Sprites from './Sprites';

import sprite from './sprite.png';

const screen = new canvas.Canvas(600, 200);
const Loop = new engine.GameLoop({ fps: 60 });
const width = screen.width;
const height = screen.height;

const { loadImage, keyboard } = utils;

const GAME_START = false;
const HIGH_SCORE = 0;
const CURRENT_SCORE = 0;


loadImage(sprite, (image) => {
  const { treeOne, treeTwo,  treeThree, treeFour, ...sprites } = Sprites(screen, image);
  const trex = new Trex(screen, 0, (height - 100), 45, 45);

  const treeSprites = [ treeOne, treeTwo, treeThree, treeFour ];

  const getTrees = () => treeSprites.map((sprite, index) => {
    const tree = {
      tree: new Tree(
        screen,
        width + (300 *  index),
        (height - (sprite.height / 2) - 10),
        sprite.width / 2, sprite.height / 2
      ),
      sprite,
      index
    }

    return tree;
  });

  const trees = getTrees();

  const ground = new Ground(
    screen,
    0,
    (height - (sprites.ground.height / 2)),
    sprites.ground.width / 2,
    sprites.ground.height / 2
  )

  const ground2 = new Ground(
    screen,
    ground.width,
    (height - (sprites.ground.height / 2)),
    sprites.ground.width / 2,
    sprites.ground.height / 2
  )

 
  keyboard.keyPress((event) => {
    if (event.charCode === 32) {
      trex.jump();
    }
  });


  function draw() {
    screen.background('white');

    ground.draw(sprites.ground);
    ground.move();
    ground2.draw(sprites.ground);
    ground2.move();

    trees.forEach(({ tree, index, sprite}) => {
      tree.draw(sprite);
      tree.move();

      if (tree.isEdge()) {
        trees[index].tree.position.x =  width + (300 *  index);
      }

      if (trex.rectangleInside(tree)) {
        Loop.stop();
      }
    })


    trex.draw(sprites.dinoStart);
    trex.move();
  }

  Loop.load(draw).start()
});