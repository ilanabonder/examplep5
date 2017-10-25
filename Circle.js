class Circle {

  constructor(r, numImages, trump, direction) {

    this.radius = r;
    this.imgs = numImages;
    // this.ellipses =numEllipses;
    this.rotateDirection = direction;
    this.circleId = r / 30 - 1;
    this.randomRotate = random(0, 360);//95
    this.randomArray = [];
    
    for(let i = 0; i < this.imgs; i++)
    {
      this.randomArray.push(random(0,360));
    }
    
  }

  display() //drawLines
  {
    let y1 = -16;
    let y2 = -30;
    for (let b = 0; b < this.imgs; b++) {
      rotate(this.randomRotate);
      image( trump, y1 - 15 * this.circleId, y2 - 15 * this.circleId, 40, 40);
      image( kimjong, y1 - 30 * this.circleId, y2 - 30 * this.circleId, 40, 40);
    }

  }

  show() { 
    push();
    noFill();
    ellipse(0, 0, this.radius);
    if(this.rotateDirection == "left")
    {
    	rotate(slider.leftrotate);
    }
    else
    {
    	rotate(slider.rightrotate);
    }
    this.display();
    pop();
  }
}