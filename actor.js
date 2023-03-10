//actor
xActor = 100;
yActor = 366;
colision = false;
points = 0;

function actionActor(){
  image(actor, xActor, yActor, 30, 30);
  
  if (keyIsDown(UP_ARROW)) {
    yActor -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yActor += 5;
  }
  
}

function verifyColision(){

  for (let i = 0; i< imagesCars.length; i++){
  colision = collideRectCircle(xCars[i], yCars[i], widthCars, heightCars, xActor, yActor, 15)
    
      if (colision) {
      yActor = 366;
      }
    
  }

}

function showPoints(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 51, 249));
  text(points, width / 5, 25);
  
}

function score (){
  if (yActor < 15){
    points += 1;
    yActor = 366;
  }
  
}
