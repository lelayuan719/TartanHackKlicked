let img;
function preload() {
    img = loadImage('./sheep/eyes.png');
}
  
function setup() {
    createCanvas(1600, 900);
    
  }
  
  function draw() {
    background("#F1AC88");
    noStroke();
    fill(255);
    circle(685, 250,180);
    //iris
    let xc =constrain(mouseX, 615, 662);
    let xs = constrain(mouseY, 227, 240);
    fill(0);
    circle(xc,xs,30);
    let xcR =constrain(mouseX, 710, 757);
    let xsR = constrain(mouseY, 227, 240);
    fill(0);
    circle(xcR,xsR,30);
    image(img, 510, 75, 600, 600);
    
  }