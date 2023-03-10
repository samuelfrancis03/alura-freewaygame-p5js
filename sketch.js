
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(backgroundRoad);
  actionActor();
  showCar();
  moveCar();
  positionLoopCar();
  verifyColision();
  showPoints();
  score();
}

