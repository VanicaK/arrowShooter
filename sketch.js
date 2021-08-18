var bow, arrow, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var score=0;
var greenB, redB,pinkB, blueB;
var arrowG
var red, blue,green, pink;

function preload() {

  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png")
}



function setup() {
  createCanvas(400, 400);

  //creating background
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  // creating bow to shoot arrow
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  greenB= new Group();
  redB= new Group();
  pinkB= new Group();
  blueB= new Group();
  arrowG= new Group();
}

function draw() {
  background(0);
  // moving ground
  scene.velocityX = -3

  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }

  //moving bow
  bow.y = World.mouseY

  // release arrow when space key is pressed
  if (keyDown("space")) {
    if(frameCount%10===0){
      createArrow();
    }

  }

  //creating continous balloons
  var sb = Math.round(random(1, 4));



  if (frameCount % 100 === 0) {
    switch (sb) {
      case 1: redBalloon();
        break;
      case 2: blueBalloon();
        break;
      case 3: greenBalloon();
        break;
      case 4: pinkBalloon();
        break;
    }
  }

  
  if(arrowG.isTouching(redB)){
    score=score+1;
    redB.destroyEach();
    arrowG.destroyEach();
  }

  if(arrowG.isTouching(blueB)){
    score=score+2;
    blueB.destroyEach();
    arrowG.destroyEach();
  }

  if(arrowG.isTouching(pinkB)){
    score=score+3;
    pinkB.destroyEach();
    arrowG.destroyEach();
  }

  if(arrowG.isTouching(greenB)){
    score=score+4;
    greenB.destroyEach();
    arrowG.destroyEach();
  }

  

  drawSprites();
  textSize(20);
  fill("black");
  text("Score: "+score,300,40);
}


// Creating  arrows for bow
function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 120;
  arrow.scale = 0.3;
  arrowG.add(arrow);
}


function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2;
  pinkB.add(pink);
}
