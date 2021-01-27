var fixedrect,moverect;

function setup() {

  createCanvas(1280,615.9);

 fixedrect = createSprite(640,200,50,80);
 moverect = createSprite(200,200,50,50);
 fixedrect.shapeColor = "orange";
 moverect.shapeColor = "orange";

}

function draw() {
  background(255,255,255);  

  if(moverect.x - fixedrect.x < fixedrect.width/2 + moverect.width/2 && fixedrect.x - moverect.x < fixedrect.width/2 + moverect.width/2 
    && moverect.y - fixedrect.y < fixedrect.height/2 + moverect.height/2 && fixedrect.y - moverect.y < fixedrect.height/2 + moverect.height/2)
  {

   moverect.shapeColor = "#ff0000";
   fixedrect.shapeColor = "#ff0000";

  }else
   {
     
    fixedrect.shapeColor = "orange";
    moverect.shapeColor = "orange";

   }
  moverect.x = World.mouseX;
  moverect.y = World.mouseY;

  drawSprites();
}