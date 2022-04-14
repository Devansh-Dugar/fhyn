var marioimg;
var princess, mushroom;
var brick, pipe;

function preload() {
  princess = loadImage("princess.png");
  mushroom = loadImage("mushroom.jpg");
  brick = loadImage("brick.png");
  pipe = loadImage("pipe.png");
  marioimg = loadAnimation("mario.gif");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  
  platform = createSprite (300,600,150,50)
  platform.addImage('brick',brick)

  mario = createSprite (150,425,150,50)
  mario.addAnimation('mario',marioimg)
  mario.scale=0.2
}

function draw() {
  background('white');

  drawSprites()
}
