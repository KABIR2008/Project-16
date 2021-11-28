const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var wall_1;
var wall_2;
var wall_3;
var wall_4;
var top_wall

function setup() {
  createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(500,790,1800,20);
  wall_1 = new Ground(900,700,20,160);
  wall_2 = new Ground(1200,700,20,160);
  wall_3 = new Ground(10,200,20,11000);
  wall_4 = new Ground(1389,200,20,11000);
  top_wall = new Ground(200,10,20000,20);
  var options = {
    restitution:0.3
  }
  ball = Bodies.circle(200,100,20,options)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);

  
}

function draw() 
{
  background("black");
  ground.show();
  wall_1.show();
  wall_2.show();
  wall_3.show();
  wall_4.show();
  top_wall.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0})
  }
}