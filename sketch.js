var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  

  bullet = createSprite(50,200,50,50);
  //bullet.shapeColor=("white");

  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2)
  //wall.shapeColor(80,80,80);


  deformation=0.5 * weight * speed * speed / 22500;
  
bullet.colide="wall";
  
}

function draw() {
  background(255,255,255); 
  /*if(wall.x - car.x <= car.width /2 + wall.width /2){
   car.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   
   if(deformation>180){
     car.shapeColor=color(255,0,0);
   }

   if(deformation<180 && deformation>100){
     car.shapeColor=color(230,230,0);
   }

   if(deformation<100){
     car.shapeColor=color(0,255,0);
   }

  } 
  //car1.x = World.mouseX;
  //car1.y = World.mouseY;
  */
  drawSprites();
}