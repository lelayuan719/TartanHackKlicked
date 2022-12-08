let spritedata
let spritesheet
let body1;
let animation = []

let sheep = [] 

let xLeft = 160;
let xRight = 240;
let y = 180;

function preload(){

 body1 = loadImage('./sheep/1.png');
 body2 = loadImage('./sheep/2.png');
 body3 = loadImage('./sheep/3.png');
 body4 = loadImage('./sheep/4.png');
 
}
console.log("body test" + body1);
function setup() {
    console.log("test preload");
  background(255);  
//   createCanvas(window.screen.width+180, window.screen.height-180);
  createCanvas(1700,355);
  frameRate(10)
  
  animation.push(body1)
  animation.push(body2)
  animation.push(body3)
  animation.push(body4)
  sheep.push(new Sprite(animation, -0.5 , 0, 0 ))
  
}

function draw() {
  background("#F1AC88");
  fill(0);
  
  ellipse(xLeft, y, 25);
  ellipse(xRight, y, 25);

  y = map(mouseY, 0, height, 170, 190, true);
  xLeft = map(mouseX, 0, width, 150, 170, true);
  xRight = map(mouseX, 0, width, 230, 250, true);

  
  sheep.forEach(horse => {
  	horse.show()
  	horse.animate()
  })
  console.log("drawCalled");
  console.log(mouseX);
  console.log(mouseY);
}

class Sprite {
  constructor( animation, speed, x, y) {
  	this.animation = animation 
    this.len = this.animation.length
    this.speed = speed 
    this.index = 0
    this.x = x
    this.y = y
  }
  
  show() {
    let index = Math.floor(this.index % this.len)
    image(this.animation[index],800,this.y)
  }
  
  animate(){
    if (this.speed < 0 ){
      this.index -= this.speed
    }else {
      this.index += this.speed
    }
  	
    // this.x += this.speed * 10
    
    // if(this.x > width){
    // 	this.x = 0
    // }
    if(this.x < 0){
    	this.x = 20
    }
  }
  
}
