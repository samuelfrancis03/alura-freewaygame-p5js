//cars
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 265, 320];
let speedCars = [3, 6, 4.5, 7, 10, 4];
let widthCars = 50;
let heightCars = 40;

function showCar(){
  for (let i = 0; i  < imagesCars.length; i++)
  image(imagesCars[i], xCars[i], yCars[i], widthCars, heightCars);
}

function moveCar(){
  for (let i = 0; i < imagesCars.length; i++){
    xCars[i] -= speedCars[i];
  }
}

function positionLoopCar (){ 
  for (let i = 0; i < imagesCars.length; i++){
    if (xCars[i] < -50){
        xCars[i] = 600;
    }
  }
}