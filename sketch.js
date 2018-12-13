var MyArray = [];
var MyArray2 = [];
var numOfCircles = 40;

function preload(){
	illusion = loadImage('illusion.png');
}

function setup() {
  	createCanvas(380, 350);
		background(100);
	
	for (var i = 0; i < numOfCircles; i++){
		MyArray[i] = new RotatingObject(160,145,i*20,70,60);
		MyArray2[i] = new RotatingObject(150,135,i*10,200,80);
		MyArray[i].Step = .1;
		MyArray2[i].Step = -.1;

	
	}
}

function draw(){
	background(255);
	
	for (var i = 0; i < numOfCircles; i++){
		MyArray[i].UpdateAngle();
		MyArray[i].Move();
		MyArray[i].Display();
		
		MyArray2[i].UpdateAngle();
		MyArray2[i].Move();
		MyArray2[i].Display();
	}
}

function RotatingObject(CentX,CentY,Angle,Radius,Size){
    this.X = 0;
    this.Y = 0;
    this.CentX = CentX;
    this.CentY = CentY;
    this.angle = Angle;
		this.Radius = Radius;
    this.size = Size;
    this.Step = 5;
    this.col = color(186,232,246);
    
    this.UpdateAngle = function(){
        this.angle = (this.angle +  this.Step)%360;
    } //method
    
		this.Move = function(){
			angleMode(DEGREES);
			this.X = this.CentX + this.Radius*sin(this.angle); // cos       to switch direction
			this.Y = this.CentY + this.Radius*cos(this.angle); // sin
		}
		
		this.Display = function(){
			noStroke();
			fill(this.col);
			image(illusion,this.X,this.Y,this.size,this.size);
			//image(illusion,this.X,this.Y,this.size,this.size);
		}
} //object
