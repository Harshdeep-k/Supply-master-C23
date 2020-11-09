const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxLeft,boxBottom,boxRight;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	boxLeft=Bodies.rectangle(310,600,20,100,{isStatic:true});
	World.add(world,boxLeft);
	
	boxBottom=Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,boxBottom);

	boxRight=Bodies.rectangle(490,600,20,100,{isStatic:true});
	World.add(world,boxRight);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.x=ground.position.x;
  groundSprite.y=ground.position.y;

  rectMode(CENTER);
  fill("red");
  rect(boxLeft.position.x,boxLeft.position.y,20,100);
  rect(boxRight.position.x,boxRight.position.y,20,100);
  rect(boxBottom.position.x,boxBottom.position.y,200,20);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	packageSprite.scale=0.1;
  }
}



