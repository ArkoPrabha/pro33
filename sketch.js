var bgImg,bg,bgImg1,bgImg2,bgImg3
var snow = [];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
  bgImg= loadImage("snow1.jpg")
  bgImg1= loadImage("snow2.jpg")
  bgImg2=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
  bg= createSprite(400,400)
  bg.addAnimation("bg",bgImg)

  for (var j = 75; j <=width; j=j+50) { 
    snow.push(new Snow(j,75));
  }

  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    snow.push(new Snow(j,175));
  }

  
  for (var j = 75; j <=width-10; j=j+50) 
  {
    snow.push(new Snow(j,275));
  }
  
  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    snow.push(new Snow(j,375));
  }
  
}

function draw() {
  background(255); 
  
  Engine.update(engine)
  if(keyIsDown(UP_ARROW)){
    bg.changeAnimation("bg",bgImg1)
  }
  if(keyIsDown(DOWN_ARROW)){
    bg.changeAnimation("bg",bgImg2)
  }
  if(keyIsDown(LEFT_ARROW)){
    bg.changeAnimation("bg",bgImg2)
  }
  for (var i = 0; i < plinkos.length; i++) {
    snow[i].display();   
  } 
  
  if(frameCount%60===0){
    particles.push(new Particles(random(10,width),10,20))
  }
  drawSprites();
}