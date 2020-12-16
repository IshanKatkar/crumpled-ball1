
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinobj,ball,groundobj;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

dustbinobj=new Dustbin(1200,650)

	//Create the Bodies Here.

	 ball = new Paper(200,450,40)
	 groundobj =new Ground(800,670,1600,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  groundobj.display();
  dustbinobj.display();

 
}





