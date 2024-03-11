let x=165;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0,75,0);
  quad(x,500,200,x,600,300,550,400);
  stroke(240,0,115);
  fill(0,0,40);
  quad(10,20,500,300,x,50,40,10);
  stroke(200,200,200);
  quad(500,20,300,x,50,40,x,400);
  fill(230,0,0);
  quad(x,40,75,85,90,40,55,99,88);
  fill(0,33,160);
  stroke(111,111,0);
  
  x=x+1;
  
  
  
}