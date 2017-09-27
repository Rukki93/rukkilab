function setup() {
  createCanvas(800,600);
 
}

function draw() {
  background(220,220,220);  
     
  ellipse(mouseX,mouseY,50,50);

  line(pmouseX,pmouseY,mouseX,mouseY);
}