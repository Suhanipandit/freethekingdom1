var prince
var monster
var dragon
var ground
var bg,bgimage
function preload(){
  bgimage=loadImage("volcano sky.jpg")
}
function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
  prince=createSprite(400, 200, 50, 50);
  ground=createSprite(displayWidth/2,displayHeight-200,displayWidth,20);
  
}

function draw() {
  background(bgimage)  
  if(keyDown(LEFT)){
    prince.x=prince.x-10
  }
  if(keyDown(RIGHT)){
    prince.x=prince.x+10
  }
  if(keyDown("space")){
    prince.velocityY=-10
  }
  prince.velocityY=prince.velocityY+0.8
  prince.collide(ground)
  spawnDragons()
  spawnMonsters()
  drawSprites();
}
function spawnDragons(){
  if(World.frameCount%120===0){
    dragon=createSprite(displayWidth+50,displayHeight-220,10,50)
    dragon.velocityX=-5
    dragon.lifetime=600
  }
}
function spawnMonsters(){
  if(World.frameCount%150===0){
    monster=createSprite(500,-30,10,50)
    monster.x=random(100,displayWidth-100)
    monster.velocityY=5
    monster.lifetime=600
  }
}