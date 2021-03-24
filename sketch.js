
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var ground;
//var launcher;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	 tree1 = new Tree(1000,350,500,700);
	 
	 ground = new Ground(600,700,1200,10);
	 boy = new Boy(320,600,200,500);
	
	 mango1 = new Mango(1100,200,40);
	 mango2 = new Mango(900,200,40);
	 mango3 = new Mango(970,250,40);
	 mango4 = new Mango(1000,100,40);
	 
	 stone  = new Stone(255,480,70,50);
	 launcher = new Launcher(stone.body,{x:255,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(255);
  ground.display();
 tree1.display();
 boy.display();
 stone.display();
 launcher.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}
function keyPressed(){
	if(keyCode===32){
	 launcher.attach(stone.body);
	}
}
