var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImg



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png")
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  //console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
  // use the modulus operator for spwaning the cloud on different frames
  if(frameCount%40 === 0){

  //create the cloud and give it a velocityX
  var cloud = createSprite(500, 50, 50, 20)
  cloud.velocityX = -8
  
  //add the cloud image
  cloud.addImage(cloudImg);
  
  //give the cloud random values of y
  cloud.y = Math.round(random(10,100))
  
  // use console.log to calculate the depth of the cloud and the trex
  console.log(cloud.depth)
  console.log(trex.depth)
  
  // set cloud.depth equal to trex.depth
  cloud.depth = trex.depth
  
  // set trex.depth same as trex.depth + 1
  trex.depth = trex.depth + 1
  }
}



