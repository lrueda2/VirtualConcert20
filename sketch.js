/// variables for the gender buttons and start button
var startGame;
var startGame2;
var button1;
var button2;
var button3;
var button4;
// a variable for our canvas so we can hide it while a user is selecting character
let canvas;
// a variable for our gamestate so we know what to display
let gameState;
// Bouncing cat
let cat;
let spaceImage;
let catX, catY;
let catSpeed;
let catGravity;
let score;
let button;
let song;
// let x = 0;
// var horizon, sprite;
let audience;
let audienceX, audienceY;
let audience1;
let audience1X, audience1Y;
let audience2;
let audience2X, audience2Y;
let audience3;
let audience3X, audience3Y;
let audience4;
let audience4X, audience4Y;

let fall;
let push;
var x = 0;
var direction = "right";

function preload() {
  cat = loadImage('./Image/Crowdsurfer.png');
  spaceImage = loadImage('./Image/start.jpg');
  crowdImage = loadImage('./Image/crowd.jpg');
  audience = loadImage('./Image/people1.png');
  audience1 = loadImage('./Image/people1(1).png');
  audience2 = loadImage('./Image/people1(2).png');
  audience3 = loadImage('./Image/people1(3).png');
  audience4 = loadImage('./Image/people1(4).png');
  mosh = loadImage('./Image/mosh.png');
  push1 = loadImage('./Image/push1.png');
  push2 = loadImage('./Image/push2.png');
  push3 = loadImage('./Image/push3.png');
  push4 = loadImage('./Image/push4.png');
  moshpits = loadImage('./Image/moshpits.jpg');
  song = loadSound('audio/EternallyYours.mp3');
  song2 = loadSound('audio/Disguise.mp3');
  song3 = loadSound('audio/Voices.mp3');
  song4 = loadSound('audio/In Between.mp3');
  song4 = loadSound('audio/Afterall.mp3');
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  //Instructions
  gameState = 1;
  button1 = createButton("Crowd Surf!");
  button1.mousePressed(surfIntro);
  button1.position(1250, 625);
  button2 = createButton("Mosh Pit!");
  button2.mousePressed(moshIntro);
  button2.position(50, 625);
  // chose crowd surf
  button3 = createButton("Click me!");
  button3.mousePressed(startGame);
  button3.position(1200, 625);
  //game play page
  catX = 10;
  catY = 490;
  catSpeed = 40;
  catGravity = 13;
  audienceX = 175;
  audienceY = 555;
  audience1X = 384;
  audience1Y = 530;
  audience2X = 610;
  audience2Y = 465;
  audience3X = 825;
  audience3Y = 425;
  audience4X = 1000;
  audience4Y = 400;
  textAlign(CENTER);
  //  if choose mosh pits
  button4 = createButton("Click me!");
  button4.mousePressed(startGame2);
  button4.position(1200, 625);
  //moshpits
  push1X = 10;
  push1Y = 60;
  push2X = 290;
  push2Y = 300;
  push3X = 925;
  push3Y = 35;
  push4X = 1425;
  push4Y = 280;
}

function draw() {
  if (gameState == 1) {
    canvas.show();
    button1.show();
    button2.show();
    button3.hide();
    button4.hide();
    noTint();
    image(spaceImage, 0, 0, width, height);
    fill(255);
    textSize(70);
    text("Virtual Concert", 800, 90);
    textSize(30);
    text("Did your concert plans also got cancelled too?", 770, 160);
    text("Yea me too, but you can have an expierence here.", 770, 200);
    text("Pick Your Path to Expierence the Moment", 770, 250);
  } else if (gameState == 2) {
      canvas.show();
      button1.hide();
      button2.hide();
      button3.show();
      button4.hide();
      noTint();
      image(spaceImage, 0, 0, width, height);
      fill(255);
      textSize(70);
      text("Crowd Surfing Instructions", 750, 90);
      textSize(30);
      text("Use the right and up arrow keys to move your character. Help your character make it toward the stage.", 760, 160);
    //ready to surf
  } else if (gameState == 3) {
    //if choose mosh pit
    canvas.show();
    button1.hide();
    button2.hide();
    button3.hide();
    button4.show();
    noTint();
    image(spaceImage, 0, 0, width, height);
    fill(255);
    textSize(70);
    text("Mosh Pit Instructions", 760, 90);
    textSize(30);
    text("Use the mouse around for to move your character. Help your character move in the Mosh Pit.", 745, 160);
    text("Be aware because they come out of nowhere", 760, 200);
    //ready to mosh
  } else if (gameState == 4) {
    noTint();
    image(crowdImage, x, 0, width, height);
    tint(random(255), random(255), random(255));
    image(cat, catX, catY, 150, 200);
    //audience
    // fill(0);
    image(audience, audienceX, audienceY, 250, 275);
    image(audience1, audience1X, audience1Y, 350, 390);
    image(audience2, audience2X, audience2Y, 450, 465);
    image(audience3, audience3X, audience3Y, 750, 775);
    image(audience4, audience4X, audience4Y, 500, 525);

    if (keyIsPressed) {
      if (keyCode === RIGHT_ARROW) {
        catX += catSpeed;

        catX = catX + 0.1;
        if (catX > width) {
          catX = 0;
        }
      }
       if (keyCode === LEFT_ARROW) {
         catX -= catSpeed;
       }
      if (keyCode === UP_ARROW) {
        catY -= catGravity;
      }
       if (keyCode === DOWN_ARROW) {
         catY += catGravity;
       }
    }
  } else if (gameState == 5) {
    //play the game you had selected from the start
    canvas.show();
    // noTint();
    image(moshpits, 0, 0, width, height);
    // tint(random(255), random(255), random(255));
    image(mosh, mouseX, mouseY, 650, 675);
    // Image to move around the canvas
    image(push1, push1X, push1Y, 450, 475);
    image(push2, push2X, push2Y, 450, 475);
    image(push3, push3X, push3Y, 450, 475);
    image(push4, push4X, push4Y, 450, 475);

    if (direction=="right") {
      push1X=push1X+1;
    }
    if (direction=="left") {
      push1X=push1X-1;
    }
    if (push1X>=100) {
      direction = "left";
    }
    if (push1X<=0) {
      direction = "right";
    }

    if (direction=="right") {
      push2X=push2X+1;
    }
    if (direction=="left") {
      push2X=push2X-1;
    }
    if (push2X>=400) {
      direction = "left";
    }
    if (push2X<=0) {
      direction = "right";
    }

    if (direction=="left") {
      push3X=push3X+1;
    }
    if (direction=="right") {
      push3X=push3X-1;
    }
    if (push3X>=60) {
      direction = "right";
    }
    if (push3X<=0) {
      direction = "left";
    }

    if (direction=="left") {
      push4X=push4X+1;
    }
    if (direction=="right") {
      push4X=push4X-1;
    }
    if (push4X<=100) {
      direction = "right";
    }
    if (push4X>=100) {
      direction = "left";
    }
}
}

function surfIntro() {
  button1.hide();
  gameState = 2;
}

function startGame() {
  button3.hide();
  gameState = 4;
  if(song.isPlaying()){
   song.stop();
 } else{
   song.play();
 }
}

function moshIntro() {
  button2.hide();
  gameState = 3;
}

function startGame2() {
  button4.hide();
  gameState = 5;
  if(song3.isPlaying()){
   song.stop();
 } else{
   song3.play();
 }

}
