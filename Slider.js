class Slider {
  constructor(nuclear) {
    this.dragging = false; // Is the slider being dragged?
    this.rollover = false; // Is the mouse over the slider?

    this.x = 50;
    this.y = 420;
    this.w = 50;
    this.h = 50;
    // Start and end of slider
    this.sliderStart = 50;
    this.sliderEnd = 450;
    // Offset for dragging slider
    this.offsetX = 0;
  }
  
  move() {

    this.leftrotate = map(this.x, this.sliderStart, this.sliderEnd - this.w, 0, 360);
    this.rightrotate = map(this.x, this.sliderStart, this.sliderEnd - this.w, 0, -360);
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
    }
    // Keep rectangle within limits of slider
    this.x = constrain(this.x, this.sliderStart, this.sliderEnd - this.w);

    // Draw a line for slider
    stroke(255);
    line(this.sliderStart, this.y + this.h / 2, this.sliderEnd, this.y + this.h / 2);

    stroke(255);
    // // Fill according to state
    // if (this.dragging) {
    //   fill(50);
    // } else {
    //   fill(175);
    // }
    // Draw rectangle for slider
    rect(this.x, this.y, this.w, this.h);
  }
}