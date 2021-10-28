// Yago Vaz Bezerra de Menezes
// 01/20/2018


function randInt(num){
	return Math.floor(Math.random() * num)
}


function Piece(s,w,h,ws){ // s = size, w= weight, h = height and ws = window size
	this.sizeAdjust = ((s - 1) / 2);
	this.x = (ws / 4)  - this.sizeAdjust * scl;
	this.stackNumber = 0;
	this.y = h;
	this.r = randInt(256);
	this.g = randInt(256);
	this.b = randInt(256);
	this.weight = w; 
	this.pick = function(){
		this.y = canvasHeight / 4;
	}
	this.release = function(){
		this.y = canvasHeight - 1.5 * (piecesStack[pos].length + 1) * scl;  
	}
	this.dir = function(x) {  // Direction of the piece
    	this.x = sticks[pos + x].x - this.sizeAdjust * scl ;
    	this.stackNumber = pos + x;
  	}
  	this.show = function() { // Shows the snake
   	 	brush.fillStyle = "RGB(" + this.r + ", " + this.g + ", " + this.b + ")";
    	brush.roundRect(this.x, this.y, s * scl, 1.5 * scl, 4);
    	// roundRect(brush, this.x, this.y, s * scl, 1.5 * scl, 5, brush.fillStyle);
  }
}

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r){r = w / 2};
  if (h < 2 * r){r = h / 2};
  this.beginPath();
  this.moveTo(x+r, y);
  this.arcTo(x+w, y,   x+w, y+h, r);
  this.arcTo(x+w, y+h, x,   y+h, r);
  this.arcTo(x,   y+h, x,   y,   r);
  this.arcTo(x,   y,   x+w, y,   r);
  this.closePath();
  brush.fill();
  brush.stroke();
}
