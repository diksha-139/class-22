
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground;

var wall1,wall2,wall3,wall4;
var ball;


var button;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = 
   {
    restitution: 1
    
  }
   

  ground = new Ground(200,390,400,20);

wall1 = new Ground(50,200,30,20)
wall2 = new Ground(150,200,40,20)
 wall3 = new Ground(250,200,40,20)

wall4= new Ground(200,280,20,100)

  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
  button = createImg("up.png")
  button.position(20,30)
  button.size(50,50);
  button.mouseClicked(vForce)

}


function draw() 
{
  background("aqua");
  Engine.update(engine);
  
  console.log(ball)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  ground.display();
  wall1.display()
 wall2.display();
 wall3.display()
 wall4.display()
}



  function vForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
  }


function keyPressed(){
  if(keyCode === UP_ARROW){
    vForce()
  }
}