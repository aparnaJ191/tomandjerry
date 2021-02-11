var cat1, cat2, cat3, cat4;
var garden;
var mouse1, mouse2, mouse3, mouse4;

var canvas,bg;

function preload() {
    //load the images here
  garden = loadImage("images/garden.png");
  cat1 = loadAnimation("images/cat1.png");
  cat3 = loadAnimation("images/cat2.png", "images/cat3.png");
  cat4 = loadAnimation("images/cat4.png");



  mouse1 = loadAnimation("images/mouse1.png");
  mouse3 = loadAnimation("images/mouse2.png", "images/mouse3.png");
  mouse4 = loadAnimation("images/mouse4.png");
}

function setup(){
  canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
    cat2 = createSprite(870, 600);
    cat2.addAnimation("Tom", cat1);
    cat2.scale=0.2;
    
    mouse2 = createSprite(200,600);
    mouse2.addAnimation("Jerry", mouse1);
    mouse2.scale=0.15;
    
}

function draw() { 

    background(garden);
    //Write condition here to evalute if tom and jerry collide

    if((cat2.x - mouse2.x) < (cat2.width - mouse2.width)/2){
      
      cat2.velocityX = 0;
   
      cat2.scale = 0.2;
      cat2.addAnimation("lastCat", cat4);
      cat2.x = 300;
      cat2.changeAnimation("lastCat");

      mouse2.addAnimation("lastMouse", mouse4);
      mouse2.scale = 0.12;
      mouse2.changeAnimation("lastMouse");
  }
        
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
   
  if(keyCode == LEFT_ARROW){
    cat2.velocityX = -5; 
    cat2.addAnimation("tomRunning", cat3);
    cat2.changeAnimation("tomRunning");
    
    mouse2.addAnimation("jerryTeasing", mouse3);
    mouse2.frameDelay = 25;
    mouse2.changeAnimation("jerryTeasing");
  }
}
