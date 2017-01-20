
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(140, 140, 140);
    
  stroke(255);
  strokeWeight(8);
  noFill();
  
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
    if (mouseIsPressed) {
      background(140, 255, 0);
      fill(255,0,0);
      rect(20,20,60,60);

      }
        fill(255, 0, 200);

  }
    rect(300, 200, 100, 100);
}