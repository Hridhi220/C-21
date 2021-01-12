var fixedRect,movingRect;
var gameobj1,gameobj2,gameobj3;

 function setup(){    
 createCanvas(800,800);
 fixedRect=createSprite(400, 400, 50, 80); 
 fixedRect.shapeColor="green";
 movingRect=createSprite(600, 600, 80, 50);
  movingRect.shapeColor="green";

  gameobj1=createSprite(100,100,50,50);
  gameobj1.shapeColor="blue";
  gameobj2=createSprite(300,100,50,50);
  gameobj2.shapeColor="blue";
  gameobj3=createSprite(500,100,50,50);
  gameobj3.shapeColor="blue";
  }
  
  
  function draw() {
  background(0);

 movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;



  if(isTouching(movingRect,gameobj3)) {
    movingRect.shapeColor="red";
    gameobj3.shapeColor="red";
  }

  else{ movingRect.shapeColor="green"
  gameobj3.shapeColor="blue";
  } 

drawSprites(); 


}

