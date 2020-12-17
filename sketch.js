var car, wall
var speed, weight
var deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  car.shapeColor = "black"
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = "purple"

  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background("grey");  

  deformation = (0.5 * weight * speed * speed)/22500

if(car.x - wall.x <= car.width/2 + wall.width/2
  && wall.x - car.x <= car.width/2 + wall.width/2
  && car.y - wall.y <= car.height/2 + wall.height/2
  && wall.y - car.y <= car.height/2 + wall.height/2){
  car.velocityX=0
}
if(deformation<100){
  car.shapeColor = "green"
}
else if(100<deformation<180){
  car.shapeColor = "yellow"
}
else{
  car.shapeColor = "red"
}
  drawSprites();
}