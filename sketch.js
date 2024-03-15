let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y
function setup() {
  createCanvas(600, 600);
   background(color(500,250,120));
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 300
  posicaoVertical = 500;
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,90);
 
 
 
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
 
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
 
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
 
  if (mouseIsPressed){
    cor = color(random(0,7), random(0,7), random(7), random(0,100));
  }
   
}