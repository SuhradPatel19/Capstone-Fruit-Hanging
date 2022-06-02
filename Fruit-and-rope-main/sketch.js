const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, ball, basketImage
var slingshot
var onSling = true


function preload() {
  backgroundImg = loadImage("background.png");
  basketImage = loadImage("../Fruit-and-rope-main/basket.png")
  melonImage= loadImage("../Fruit-and-rope-main/melon.png")

}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(450, 399, width, 30)
  ball = new Ball(200, 200, 20)
slingshot = new Slingshot(ball.ball,{x:300,y:100})



  //Challenge1:

  //challenge 2


}
function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display()
  ball.display()
  slingshot.display()

  
  push()
  imageMode(CENTER)
  image(melonImage, ball.ball.position.x, ball.ball.position.y, 60, 60)
  image(basketImage, 550, 330, 150, 150)
  pop()

  //imageMode(CENTER)
     
  //text(mouseX + ',' + mouseY, 10, 15);


  


}

function mouseDragged(){
  if( onSling===true){
    Matter.Body.setPosition(ball.ball,{x:mouseX,y:mouseY})
}
}

function mouseReleased(){
  slingshot.fly()
  onSling=false


}

function keyPressed(){
  if(keyCode === 32){
slingshot.attach(ball.ball)
onSling= true
  }
}





