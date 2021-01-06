var wall,thickness;
var weight, speed, bullet;
var ob1, ob2;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  
  bullet= createSprite(50,200,50,30);
  bullet.shapeColor= "white";
  
  wall= createSprite(1200,200,thickness, height/2);
  wall.shapeColor= "white";

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

}

function draw() {
  background("black");  
  
  bullet.velocityX= speed;

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5* weight*speed*speed/(thickness*thickness*thickness);
    if (damage < 10){
     wall.shapeColor="green";
    }
    if (damage >10){
     wall.shapeColor="red";
    }
    
  }
  drawSprites();
}
function hasCollided(ob1, ob2) {
bulletRightEdge= ob1.x - ob1.width;
wallLeftEdge= ob2.x;

if(bulletRightEdge>= wallLeftEdge){
  return true;
}
return false;
}