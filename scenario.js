//scene
let imageCarOne;
let imageCarTwo;
let imageCarThree;
let backgroundRoad;
let actor;

function preload(){
  backgroundRoad = loadImage('assets/estrada.png');
  actor = loadImage('assets/ator-1.png');
  imageCarOne = loadImage('assets/carro-1.png');
  imageCarTwo = loadImage('assets/carro-2.png');
  imageCarThree = loadImage('assets/carro-3.png');
  
  imagesCars = [imageCarOne, imageCarTwo, imageCarThree, imageCarOne, imageCarTwo, imageCarThree];
}
