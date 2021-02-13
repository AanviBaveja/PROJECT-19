
var score = 0;
var backGround,backGroundImage,backGroundImage1;
var choose,choose1,choose2,CHOOSE, CHOOSE1, CHOOSE2;
var unicorn, UNICORN;
var CHOOSE=0
var CHOOSE2=1
var GAMESTATE=CHOOSE
var rand

function preload(){
  backGroundImage=loadAnimation("BACKGROUND1.png")
  backGroundImage1=loadAnimation("download1.png")
  UNICORN=loadImage("UNICORN.png")
  CHOOSE=loadImage("images.png")
  CHOOSE1=loadImage("1.png")
   CHOOSE2=loadImage("2.png")
  DIAMOND=loadImage("diamonds.png")
  JWELLERY=loadImage("jwell.png")
   CASH=loadImage("cash.png")
  HOMES=loadImage("House.png")
  WOMAN=loadImage("womanwoman.png")
  INSIDE=loadImage("insidehome.jpg")
  GAMEover=loadImage("GAMEOVER.png")
 HAMMER=loadImage("hammer.png")
   TOOL=loadImage("tool.png")
   BOW=loadImage("bow.png")
  GERM=loadImage("germ.png")

}

function setup(){
createCanvas(600,600);
   backGround2=createSprite(300,300,600,600)
backGround2.addAnimation("bb",backGroundImage1)
  backGround=createSprite(300,300,600,600)
backGround.addAnimation("bb",backGroundImage)
  
  backGround.scale=2
unicorn=createSprite(50,350,20,20)
  unicorn.addImage(UNICORN)
  unicorn.scale=0.28
  choose=createSprite(200,50,400,20)
  choose.addImage(CHOOSE)
  choose.scale=0.9
   choose1=createSprite(100,120,20,20)
  choose1.addImage(CHOOSE1)
   choose1.scale=0.08
   choose2=createSprite(300,120,20,20)
  choose2.addImage(CHOOSE2)
   choose2.scale=0.28
  rand=Math.round(random(1,3))
  womanG = new Group()
  homeG= new Group()
  jwelleryG= new Group()
  diamondG= new Group()
  cashG= new Group()
  toolG=new Group()
  bowG=new Group()
  hammerG=new Group()
  germG= new Group()
}

function draw() {
  background("white")
 
  unicorn.y=World.mouseY
  unicorn.x=World.mouseX
 
    backGround.velocityX=-5
  backGround2.velocityX=-5
  backGround2.scale=2
    //backGround.x = backGround.width /2;
     
    if (backGround.x <0){
      backGround.x = backGround.width/2;
    }
   if (backGround2.x <0){
      backGround2.x = backGround2.width/2;
    }
  
    
  if(mousePressedOver(choose1)){
   
    choose1.visible=false
    choose2.visible=false
    
    
    
    
  backGround.depth=backGround2.depth
   
     backGround2.depth=backGround2.depth+1
    
      unicorn.depth=backGround2.depth
    unicorn.depth=unicorn.depth+1
   unicorn.velocityX=0
     unicorn.velocityY=0
     
  }
  
  if(homeG.isTouching(unicorn)){
   unicorn.destroy()
    game=createSprite(300,300,600,600)
    game.shapeColor="black"
    GG=createSprite(270,300,50,50)
    GG.addImage(GAMEover)
    
    homeG.depth=game.depth
    game.depth=game.depth+1
  
  }
  if(bowG.isTouching(unicorn)){
   unicorn.destroy()
    game=createSprite(300,300,600,600)
    game.shapeColor="black"
    GG=createSprite(270,300,50,50)
    GG.addImage(GAMEover)
    
    bowG.depth=game.depth
    game.depth=game.depth+1
  
  }
  
   if(toolG.isTouching(unicorn)){
   unicorn.destroy()
    game=createSprite(300,300,600,600)
    game.shapeColor="black"
    GG=createSprite(270,300,50,50)
    GG.addImage(GAMEover)
    
    toolG.depth=game.depth
    game.depth=game.depth+1
  
  }
  if(diamondG.isTouching(unicorn)){
    score=score+100
  diamondG.destroyEach();
  }
  
  if(jwelleryG.isTouching(unicorn)){
    score=score+300
  jwelleryG.destroyEach();
  }
  if(cashG.isTouching(unicorn)){
    score=score+1200
  cashG.destroyEach();
  }
   if(germG.isTouching(unicorn)){
   unicorn.destroy()
    game=createSprite(300,300,600,600)
    game.shapeColor="black"
    GG=createSprite(270,300,50,50)
    GG.addImage(GAMEover)
    
    germG.depth=game.depth
    game.depth=game.depth+1
  
  }
  
 
    spawnDiamond();
 
    spawnCash();
 
    spawnJwellery();
  spawnHOMES();
spawnWOMAN();
  spawnTOOLS()
  spawnBOWS()
  spawnGERM()
  textSize(20);
 

  drawSprites();
   fill(255);
  text("Score: "+ score,width/2,20);
  console.log(score)

}




function spawnJwellery(){
if(frameCount%61===0){
  jwellery=createSprite(600,550,20,20)
  jwellery.addImage(JWELLERY)
  jwellery.velocityX=-5
  jwellery.lifetime=300
  jwellery.depth=backGround2.depth
  jwellery.depth=jwellery.depth+1
  jwellery.scale=0.16
  jwelleryG.add(jwellery)
   unicorn.depth=jwellery.depth;
  unicorn.depth=unicorn.depth+1;
}
  
  
  
  
}


function spawnDiamond(){
if(frameCount%83===0){
  diamond=createSprite(600,550,20,20)
  diamond.addImage(DIAMOND)
  diamond.velocityX=-5
  diamond.lifetime=300
  diamond.depth=backGround2.depth
  diamond.depth=diamond.depth+1
  diamond.scale=0.03
  diamondG.add(diamond)
   unicorn.depth=diamond.depth;
  unicorn.depth=unicorn.depth+1;
}
  
}

function spawnCash(){
if(frameCount%101===0){
  cash=createSprite(600,550,20,20)
  cash.addImage(CASH)
 cash.velocityX=-5
cash.lifetime=300
  cash.depth=backGround2.depth
  cash.depth=cash.depth+1
  cash.scale=0.1
  cashG.add(cash)
   unicorn.depth=cash.depth;
  unicorn.depth=unicorn.depth+1;
}
}

function spawnHOMES(){
if(frameCount%550===0){
  home=createSprite(300,450,20,20)
  home.addImage(HOMES)
 home.velocityX=-5
home.lifetime=300
  home.depth=backGround2.depth
  home.depth=cash.depth+1
  home.scale=0.5
  unicorn.depth=home.depth;
  unicorn.depth=unicorn.depth+1;
  homeG.add(home)
 
    }
}

function spawnWOMAN(){
if(frameCount%550===0){
  woman=createSprite(240,450,20,20)
 woman.addImage(WOMAN)
woman.velocityX=-5
woman.lifetime=300
  woman.depth=backGround2.depth
  woman.depth=woman.depth+1
  woman.scale=0.3
   unicorn.depth=woman.depth;
  unicorn.depth=unicorn.depth+1;
  womanG.add(woman)
}
}

function spawnTOOLS(){
if(frameCount%100===0){
  tool=createSprite(600,450,20,20)
 tool.addImage(TOOL)
tool.velocityX=-5
tool.lifetime=300
  tool.depth=backGround2.depth
  tool.depth=tool.depth+1
  tool.scale=0.6
   unicorn.depth=tool.depth;
  unicorn.depth=unicorn.depth+1;
  toolG.add(tool)
}
}


function spawnTOOLS(){
if(frameCount%100===0){
  tool=createSprite(600,450,20,20)
 tool.addImage(TOOL)
tool.velocityX=-5
tool.lifetime=300
  tool.depth=backGround2.depth
  tool.depth=tool.depth+1
  tool.scale=0.6
   unicorn.depth=tool.depth;
  unicorn.depth=unicorn.depth+1;
  toolG.add(tool)
}
}


function spawnBOWS(){
if(frameCount%110===0){
  bow=createSprite(550,450,20,20)
 bow.addImage(BOW)
bow.velocityX=-5
bow.lifetime=300
  bow.depth=backGround2.depth
  bow.depth=bow.depth+1
  bow.scale=0.6
   unicorn.depth=bow.depth;
  unicorn.depth=unicorn.depth+1;
  bowG.add(bow)
}
}


function spawnGERM(){
if(frameCount%110===0){
  germ=createSprite(Math.round(random(50,400)),Math.round(random(50,400)),20,20)
 germ.addImage(GERM)
germ.velocityX=Math.round(random(-5,5))
germ.velocityY=Math.round(random(-3,6))  
germ.lifetime=300
  germ.depth=backGround2.depth
  germ.depth=germ.depth+1
  germ.scale=0.2
   unicorn.depth=germ.depth;
  unicorn.depth=unicorn.depth+1;
  germG.add(germ)
}
}
if(frameCount%1000===0){
 treasure=createSprite() 
}



















