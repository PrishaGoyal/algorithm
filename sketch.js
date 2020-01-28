var movingRectangle,fixedRectangle;

function setup() {
  createCanvas(800,400);
  movingRectangle = createSprite(400, 200, 50, 50); 
  fixedRectangle = createSprite(300,100,70,70);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY; 
  movingRectangle.debug=true;
  fixedRectangle.debug =true;
  if(movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2
    &&fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2
    &&fixedRectangle.y-movingRectangle.y<fixedRectangle.height/2+movingRectangle.height/2
    &&movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+fixedRectangle.height/2){
 movingRectangle.shapeColor="red" ;
 fixedRectangle.shapeColor="blue";
  }
  else{
    movingRectangle.shapeColor="green";
    fixedRectangle.shapeColor="green";
  }
}