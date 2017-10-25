var circles=[];

function preload(){
  trump = loadImage ('myeye.png'); 
  kimjong = loadImage ('myeye.png'); 
}

function setup() { 
  createCanvas(500, 500);
  angleMode(DEGREES);
  //circle(radius, number of lines, rotate direction);
  for(let i = 1; i < 10; i++)
  {
    
    let direction = "right";
    if(i%2 == 0) //if i equals even
    {
      direction = "left";
    }
   	let c = new Circle(30*i, 20*i, direction);
    circles.push(c);
  }
  
  slider = new Slider();
  
  
} 

function draw() { 
  noStroke();
	push();
  background(255);
  translate(250, 250);
  for(let i = 0; i < circles.length; i++)
  {
   	circles[i].show(); 
  }
  pop();
  push();
  slider.move();
  pop();
}

function mousePressed() {
  // Did I click on slider?
  if (mouseX > slider.x && mouseX < slider.x + slider.w && mouseY > slider.y && mouseY < slider.y + slider.h) {


    slider.dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    slider.offsetX = slider.x - mouseX;
  }
}

function mouseReleased() {
  // Stop dragging
  slider.dragging = false;
}