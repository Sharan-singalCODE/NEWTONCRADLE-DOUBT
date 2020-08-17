
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ChainObject1,ChainObject2,ChainObject3,ChainObject4,ChainObject5
var roof
var rp1,rp2,rp3,rp4,rp5

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof=new Roof(210,100,400,20);
	rp1=new Roof(200,100,5,5);
	rp2=new Roof(205,100,5,5)
	rp3=new Roof(210,100,5,5)
	rp4=new Roof(275,100,5,5)
	rp5=new Roof(220,100,5,5)
  	bobObject1=new Bob(70,200,20)
	bobObject2=new Bob(110,200,20)
	bobObject3=new Bob(150,200,20)
	bobObject4=new Bob(190,200,20)
    bobObject5=new Bob(230,200,20)
	ChainObject1 = new Chain(bobObject1.body, rp1.body, 40*4,0);
	ChainObject2 = new Chain(bobObject2.body, rp2.body, 40*2,0);
	ChainObject3 = new Chain(bobObject3.body, rp3.body, 40*0,0);
	ChainObject4 = new Chain(bobObject4.body, rp4.body, 40*-2,0);
	ChainObject5 = new Chain(bobObject5.body, rp5.body, 40*-4,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  roof.display()
	  ChainObject1.display()
	  ChainObject2.display()
	  ChainObject3.display()
	  ChainObject4.display()
	  ChainObject5.display()
  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000})
	}
}


