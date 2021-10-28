function Stick(x,w){
	this.x =  (w / 4) * ( x + 1 ) ;
	this.fill = "white";


	this.show = function(){
		brush.fillStyle = this.fill;
  		brush.roundRect(this.x, canvasHeight - stickSize + 3, scl, stickSize, 2);
  		return this.x
	}


	this.selected = function(){
		this.fill = "RGB(33, 149, 242)";
	}


	this.notSelected = function(){
		this.fill = "white";
	}
}

