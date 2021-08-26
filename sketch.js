var bg1,bg1Img;
var gS = "STORY";
var logo,logoImg;
var start,startImg;
var path,pathImg;
var boy,boyImg;
var invisibleGround;
var bgMusic;
var diamond,diamondImg,dGroup;
var dMusic;
var egypt, egyptImg,eGroup;
var jin,jinImg,jGroup;
var mummy,mummyImg,mGroup;
var snake,snakeImg,sGroup;
var gameOver;

function preload(){
  bg1Img = loadImage("./ps/bg1.jpg");
  logoImg = loadImage("./ps/logo.jpg");
  pathImg = loadImage("./ps/path.jpg");
  startImg = loadImage("./ps/start.png");
  boyImg = loadImage("./ps/boy.png");
  bgMusic = loadSound("./ps/bgmusic.mp3");
  diamondImg = loadImage("./ps/diamond.png");
  dMusic = loadSound("./ps/dimondM.wav");
  egyptImg = loadImage("./ps/egypt.png");
  jinImg =loadImage("./ps/jin.png");
  mummyImg = loadImage("./ps/mummy.png");
  snakeImg = loadImage("./ps/snake.png");
  gameOver = loadSound("./ps/gameoverM.wav");
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  bg1 = createSprite(displayWidth/2,displayHeight/2);
  logo = createSprite(displayWidth/2,displayHeight/5.5);
  start = createSprite(displayWidth/2 , displayHeight/2 + 100);
  path = createSprite(displayWidth/2,displayHeight/2,1,1);
  boy = createSprite(70,displayHeight - 200,1,1);
  invisibleGround = createSprite(0,displayHeight-30,displayWidth*2,10);
  invisibleGround.visible = false;
  diamond = createSprite(displayWidth,displayHeight-300,1,1);
  dGroup = new Group();
  snake= createSprite(displayWidth,displayHeight - 160,1,1);
  sGroup = new Group();
  jin = createSprite(displayWidth/2,displayHeight/2,1,1);
  jGroup = new Group();
  mummy = createSprite(displayWidth,displayHeight -150,1,1);
  mGroup = new Group();

  
}

function draw(){
  background(0);
  if(gS ==="STORY"){
    
    bg1.addImage("background1",bg1Img);
    bg1.scale = 1.5;

    logo.addImage("GameLogo",logoImg);
    logo.scale = 0.15;

    start.addImage("button",startImg);
    start.scale = 0.3;
   
    if(mousePressedOver(start)){
      gS = "PLAY";
    }
   
    drawSprites();

    textStyle(BOLDITALIC)
    textSize(30);
    fill("black");
    text("Hey! WELCOME to the Cave Adventures!",displayWidth/2-300,displayHeight/2-90);
    text("There are many rumours in the village about Gold Treasure in the Cave Of Tharsis",displayWidth/2-600,displayHeight/2-50);
    text("A boy went there to find it!",displayWidth/2-300+10,displayHeight/2-10);
    text("Now, you are going to help that boy...",displayWidth/2-300,displayHeight/2+30);
    fill("red");
    text("CAUTION: Don't touch any of obstacle or you have to start again!!!",displayWidth/2-550,displayHeight/2+70);
    
  }

  if(gS === "PLAY"){
   // bgMusic.loop();
    
    path.addImage("passage",pathImg);
    path.scale = 2;
    path.velocityX = -3;

    boy.addImage("Player",boyImg);
    boy.scale = 0.7

    if(keyDown("space")){
      boy.velocityY = -12;
    }

    boy.velocityY = boy.velocityY + 0.8;
    
    if(frameCount%300 === 0){
    diamond.addImage("Diamond",diamondImg);
    diamond.scale = 0.2;
    diamond.velocityX = -3;
    dGroup.add(diamond);
    diamond.lifetime = 400;
    }

    if(dGroup.isTouching(boy)){
     // dMusic.play();
    }

    if(frameCount%200 === 0){
      snake.addImage("Snake",snakeImg);
      snake.scale = 0.3;
      snake.velocityX = -3;
      sGroup.add(snake);
      snake.lifetime = 300;
      
    }

    if(frameCount % 500 === 0){
      mummy.addImage("Mummy",mummyImg);
      mummy.scale = 0.3;
      mummy.velocityX = -3;
      mummy.lifetime = 300;
      mGroup.add(mummy);
    }

    if(frameCount%1000 === 0){
      jin.addImage("Riddle",jinImg);
      jin.velocityX = -3;
      jGroup.add(jin);
      jin.lifetime = 300;
    }


    
    logo.destroy();
    start.destroy();
    bg1.destroy();
    boy.collide(invisibleGround);

    if(sGroup.isTouching(boy)||
       mGroup.isTouching(boy)
       ){
         gameOver.play();
         mGroup.destroy();
         sGroup.destroy();
       }
    drawSprites();
    
  }
  
  
}
