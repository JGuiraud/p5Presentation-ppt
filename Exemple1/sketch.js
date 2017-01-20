function setup() {
    createCanvas(600,400);
}

function draw() {
    
    background(0,100,50);
    ellipseMode(CENTER);
    rectMode(CENTER);

    // corps
    fill(230, 100, 100);
    rect(240, 145, 20, 100);
    
    // tête
    fill(0, 0, 100);
    ellipse(240, 115, 60, 60);

    // yeux
    fill(255, 200, 200);
    ellipse(221, 115, 16, 32);
    ellipse(259, 115, 16, 32);

    // jambes
    line(230, 195, 220, 205);
    line(250, 195, 260, 205);
}


