
var trex ,trex_running ,ground;

function preload()
{
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,150,20,50)

  //create a ground sprite
  ground = createSprite(200,180,400,10)
  trex.addAnimation("running", trex_running)
  edges = createEdgeSprites();

  trex.scale = 0.5
  trex.X = 50 ;
 
  trex.collide(ground);

}

function draw(){
  background("white")

if(keyDown("space")){
  trex.velocityY = -10 ;
}
trex.velocityY = trex.velocityY + 0.5 ;

  trex.collide(edges[3]);
  drawSprites();

}
