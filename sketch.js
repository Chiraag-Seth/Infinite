const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball;
var ground;
var backgroundImg;
var obstacle, randomX
randomX = obstacle.x;

function setup(){
    createCanvas(1000, 500);
    engine = Engine.create();
    world = engine.world;
    backgroundImg = loadImage("background.png");
   
    ball = new Runner();
    ground = new Ground();
    if (frameCount % 60 === 0){
         obstacle = new Obstacle(randomX, ground - 10);
         randomX =  Math.round(random(50,900));
         obstacle.velocityX = 5;
         obstacle.lifetime = 300;
}      
}


function draw(){
    background(backgroundImg);
    Engine.update(engine);
    if(ball.width / 2 > obstacle.width / 2 &&
        obstacle.width / 2 > ball.width / 2 &&
        ball.height / 2 > obstacle.height / 2 &&
        obstacle.height / 2 > ball.height / 2 ){
          obstacle.velocityX = 0;
          ground.velocityX = 0; 
        }
    ball.display();
    ground.display();
    obstacle.display();

}