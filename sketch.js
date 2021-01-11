//COVID19 Game
//Created by: Neeti Suggula on 1/1/2021

//This creates Variables for the code
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground, backgroundImage;
var vbottle, vbottleImage;
var greyVirus, greyImageVirus;
var pinkVirus, pinkImageVirus;
var blueVirus, blueImageVirus;
var yellowVirus, yellowImageVirus;
var redB, blueB, greenB, pinkB;
var shot, arrowImage, arrowGroup;
var score;
var dieSound, sirenSound;
var person1, Person1Img, person2, Person2Img, person3, Person3Img, person4, Person4Img, person5, Person5Img, 
person6, Person6Img, person7, Person7Img, person8, Person8Img;
var man1, man1Img;
var ambulance, ambulanceImg;
var  awareness, awarenessImg;

function preload() {
  //loads my virus images
  backgroundImage = loadImage("WorldMap.jpg");
  vbottleImage = loadImage("vaccinebottle.png");
  greyImageVirus = loadImage("coronavirus.png");
  pinkImageVirus = loadImage("coronavirus2.png");
  blueImageVirus = loadImage("coronavirus3.png");
  yellowImageVirus = loadImage("coronavirus4.png");

  //loding my vaccine images and loads my sound
  arrowImage = loadImage("vaccine.png");
  dieSound = loadSound("die.mp3");
  sirenSound = loadSound("siren.mp3");
  ambulanceImg = loadImage("Ambulance.png");
  awarenessImg = loadImage("awareness.png");
 
  //loads my peoples image
  Person1Img = loadImage("Person1.png");
  Person2Img = loadImage("Person2.png");
  Person3Img = loadImage("Person3.png");
  Person4Img = loadImage("Person4.png");
  Person5Img = loadImage("Person5.png");
  Person6Img = loadImage("Person6.png");
  Person7Img = loadImage("Person7.png");
  Person8Img = loadImage("Person8.png");
 // man1Img = loadImage("Person10.png");
}
function setup() {
  // creates the canvas
   createCanvas(windowWidth, windowHeight);

   // creates the ground sprite
  ground = createSprite(0, 0, width, height+350);
  ground.addImage("ground", backgroundImage);
  ground.x = ground.width / 2;
  ground.scale = 1.5;

  person1 = createSprite(width-30, 30, 50, 50);
  person1.addImage("person1", Person1Img);

  person2 = createSprite(width-30, 130, 50, 50);
  person2.addImage(Person2Img);

  person3 = createSprite(width-30, 260, 50, 50);
  person3.addImage(Person3Img);

  person4 = createSprite(width-30, 370, 50, 50);
  person4.addImage(Person4Img);

  person5 = createSprite(width-30, 480, 50, 50);
  person5.addImage(Person5Img);

  person6 = createSprite(width-30, 590, 50, 50);
  person6.addImage(Person6Img);

  person7 = createSprite(width-30, 700, 50, 50);
  person7.addImage(Person7Img);

  person8 = createSprite(width-30, 790, 50, 50);
  person8.addImage(Person8Img);
  //man1 = createSprite(width-30, 30, 50, 50);
  //man1.addImage("man1", man1Img);

  

  // creates the bottle sprite
  vbottle = createSprite(width-90, 200, 50, 50);
  vbottle.addImage("vbottle", vbottleImage);
  vbottle.scale = 0.15;
  score = 0;

  //Creates group
  virusGroup = new Group();
  greyV = new Group();
  pinkV = new Group();
  blueV = new Group();
  yellowV = new Group();
  shotGroup = new Group();
  //person1Grp = new Group();
  /*person2Grp = new Group();
  person3Grp = new Group();
  person4Grp = new Group();
  person5Grp = new Group();
  person6Grp = new Group();
  person7Grp = new Group();
  person8Grp = new Group();*/
}

function draw() {
  if(gameState===PLAY){

  
  // Background in motion
  ground.velocityX = -4;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  // moving the bottle with the mouse
  vbottle.y = mouseY;

  // shot generation
  if (keyDown("space")) {
    createshot();
    shot.y = vbottle.y;
  }

 //Prints virus colors at random
  var select_virus = Math.round(random(1, 4));


  if (World.frameCount % 50 == 0) {
    //This statement helps in printing the virus color

    if (select_virus == 1){
      greyVirusFn();
    } else if (select_virus == 2) {
      pinkVirusFn();
    } else if (select_virus == 3) {
      blueVirusFn();
    } else if (select_virus == 4) {
      yellowVirusFn();
    }
  }

  if (virusGroup.isTouching(person1)) {
   person1.lifetime = 0;
   ambulance = createSprite(width-30, person1.y, 50, 50);
   ambulance.addImage(ambulanceImg);
   ambulance.velocityX = -10;
   ambulance.scale = 0.05;
   sirenSound.play();
  }
  if (virusGroup.isTouching(person2)) {
    person2.lifetime = 0;
    ambulance = createSprite(width-30, person2.y, 50, 50);
   ambulance.addImage(ambulanceImg);
   ambulance.velocityX = -10;
   ambulance.scale = 0.05;
   sirenSound.play();
   }
  if (virusGroup.isTouching(person3)) {
    person3.lifetime = 0;
    ambulance = createSprite(width-30, person3.y, 50, 50);
   ambulance.addImage(ambulanceImg);
   ambulance.velocityX = -10;
   ambulance.scale = 0.05;
   sirenSound.play();
   }
   if (virusGroup.isTouching(person4)) {
    person4.lifetime = 0;
    ambulance = createSprite(width-30, person4.y, 50, 50);
    ambulance.addImage(ambulanceImg);
    ambulance.velocityX = -10;
    ambulance.scale = 0.05;
    sirenSound.play();
   }
   if (virusGroup.isTouching(person5)) {
    person5.lifetime = 0;
    ambulance = createSprite(width-30, person5.y, 50, 50);
    ambulance.addImage(ambulanceImg);
    ambulance.velocityX = -10;
    ambulance.scale = 0.05;
    sirenSound.play();
   }
   if (virusGroup.isTouching(person6)) {
    person6.lifetime = 0;
    ambulance = createSprite(width-30, person6.y, 50, 50);
    ambulance.addImage(ambulanceImg);
    ambulance.velocityX = -10;
    ambulance.scale = 0.05;
    sirenSound.play();
   }
   if (virusGroup.isTouching(person7)) {
    person7.lifetime = 0;
    ambulance = createSprite(width-30, person7.y, 50, 50);
    ambulance.addImage(ambulanceImg);
    ambulance.velocityX = -10;
    ambulance.scale = 0.05;
    sirenSound.play();
   }
   if (virusGroup.isTouching(person8)) {
    person8.lifetime = 0;
    ambulance = createSprite(width-30, person8.y, 50, 50);
    ambulance.addImage(ambulanceImg);
    ambulance.velocityX = -10;
    ambulance.scale = 0.05;
    sirenSound.play();
   }
   if(person1.lifetime==0 && person2.lifetime==0 && person3.lifetime==0 && person4.lifetime==0 && person5.lifetime==0 && person6.lifetime==0 && person7.lifetime==0 && person8.lifetime==0){
    gameState = END;
    }
    
  //If the Shot is touching the virus then both shot and virus gets destroyed
  
  if (shotGroup.isTouching(greyV)) {
    greyV.destroyEach();
    shotGroup.destroyEach();
    score = score + 1;
    dieSound.play();
  }
  if (shotGroup.isTouching(pinkV)) {
    pinkV.destroyEach();
    shotGroup.destroyEach();
    score = score + 1;
    dieSound.play();
  }

  if (shotGroup.isTouching(blueV)) {
    blueV.destroyEach();
    shotGroup.destroyEach();
    score = score + 1;
    dieSound.play();
  }

  if (shotGroup.isTouching(yellowV)) {
    yellowV.destroyEach();
    shotGroup.destroyEach();
    score = score + 1;
    dieSound.play();
  }
  // how score looks 
  text("Vaccines Given : " + score, 230, 30);
  text("NeeTi", 600, 30);
}
if(gameState===END){
  awareness = createSprite(width/2, height/2);
  awareness.addImage("awareness", awarenessImg);
  }
  // draws the sprites
  drawSprites();
  
}


//Creates shot when space is pressed
function createshot() {
  //shot = createSprite(400, 200, 10, 20);
  shot = createSprite(width-130, 200, 10, 20);
  shot.lifetime = 150;
  shot.scale = 0.1;
  shot.velocityX = -5;
  shot.addImage("shot", arrowImage);
  shotGroup.add(shot);
}
//These functions Print at random, generates speed, and size
function greyVirusFn() {
  //var greyVirus = createSprite(0, Math.round(random(20, 370)), 10, 10);
  var greyVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  greyVirus.addImage(greyImageVirus);
  greyVirus.velocityX = 5;
  greyVirus.lifetime = width;
  greyVirus.scale = 0.1;
  greyV.add(greyVirus);
  virusGroup.add(greyVirus);
}

function pinkVirusFn() {
  var pinkVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  pinkVirus.addImage(pinkImageVirus);
  pinkVirus.velocityX = 5;
  pinkVirus.lifetime = width;
  pinkVirus.scale = 0.1;
  pinkV.add(pinkVirus);
  virusGroup.add(pinkVirus);
}

function blueVirusFn() {
  var blueVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  blueVirus.addImage(blueImageVirus);
  blueVirus.velocityX = 5;
  blueVirus.lifetime = width;
  blueVirus.scale = 0.2;
  blueV.add(blueVirus);
  virusGroup.add(blueVirus);
}


function yellowVirusFn() {
  var yellowVirus = createSprite(0, Math.round(random(20, height-40)), 10, 10);
  yellowVirus.addImage( yellowImageVirus);
  yellowVirus.velocityX = 5;
  yellowVirus.lifetime = width;
  yellowVirus.scale = 0.08;
  yellowV.add(yellowVirus);
  virusGroup.add(yellowVirus);
}

/*function ambulanceFn() {
  ambulance = createSprite(width-30, 30, 50, 50);
  ambulance.addImage(ambulanceImg);
  ambulance.velocityX = -5;
  ambulance.scale = 0.05;
}*/
  


/*function person1Fn() {
  person1 = createSprite(width-30, 30, 50, 50);
  person1.addImage(Person1Img);
  person1Grp.add(person1);
}
function person2Fn() {
  person2 = createSprite(width-30, 130, 50, 50);
  person2.addImage(Person2Img);
  person2Grp.add(person2);
}
function person3Fn() {
  person3 = createSprite(width-30, 260, 50, 50);
  person3.addImage(Person3Img);
  person3Grp.add(person3);
}
function person4Fn() {
  person4 = createSprite(width-30, 370, 50, 50);
  person4.addImage(Person4Img);
  person4Grp.add(person4);
}
function person5Fn() {
  person5 = createSprite(width-30, 480, 50, 50);
  person5.addImage(Person5Img);
  person5Grp.add(person5);
}
function person6Fn() {
  person6 = createSprite(width-30, 590, 50, 50);
  person6.addImage(Person6Img);
  person6Grp.add(person6);
}
function person7Fn() {
  person7 = createSprite(width-30, 700, 50, 50);
  person7.addImage(Person7Img);
  person7Grp.add(person7);
}
function person8Fn() {
  person8 = createSprite(width-30, 790, 50, 50);
  person8.addImage(Person8Img);
  person8Grp.add(person8);
}
*/