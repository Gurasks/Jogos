// Yago Vaz Bezerra de Menezes
// 01/20/2018



var pieceHeight, stickSize, highestPieceWeight; // Number of hanoi pieces
var canvasContainer = document.querySelector("#canvasContainer");
var canvasWidth = 0.9 * canvasContainer.offsetWidth;
var scl = 0.0085 * canvasWidth;
var pieceWeight = 1; // weight of the samllest piece
var pieceSize = 3;  // Size of the smallest piece
var numPieces = 3;
var canvasHeight = 4 * scl * numPieces; // Size of cavanvas adjusts to number of pieces
var sticks = []; // Array of sticks
var pieces = []; // Array of piece objects
var pos = 0 ; // number of the stack
var numMoves = 0;
var picked = null;
var piecesStack = [[],[],[]];
var gameWin = false;
var inputHanoi = document.querySelector("input");
var pieceMoves = document.querySelector("#moves");
var canvas = document.querySelector("#canvas");
var title = document.querySelector("#title");
var brush = canvas.getContext("2d");

document.addEventListener("keydown", keyPressed);
window.addEventListener("resize", function(){
	resizeCanvas();
	resizeSticks();
	resizePieces();
	draw(numPieces);
});
inputHanoi.addEventListener("change", function(){
	newGame();
	title.classList.remove("win");
});
inputHanoi.addEventListener("focusin", function(){
	this.classList.add('sel');
})
inputHanoi.addEventListener("focusout", function(){
	this.classList.remove('sel');
})


setup();
draw(numPieces);

function setup(){
	// Get the number of pieces in the input value
	numPieces = Number(inputHanoi.value);
	// Check number if it's between parameters
	if(numPieces > 10){
		numPieces = 10;
		inputHanoi.value = "10";
	} else if(numPieces < 3){
		numPieces = 3;
		inputHanoi.value = "3";
	}
	resizeCanvas();
	pieceHeight = canvasHeight - 1.5 * numPieces * scl; // Initial value of piece height 
    stickSize = (numPieces + 2) * 1.5 * scl;
	// Create all pieces of hanoi tower and put all pieces in the left stack
	for (i = 0 ; i < 3; i++){
  		sticks.push(new Stick(i, canvasWidth)); 	
  }
	for (i = 0; i < numPieces; i++){
  		pieces.push(new Piece(pieceSize + 2 * i, pieceWeight + i, pieceHeight + 1.5 * i * scl, canvasWidth));
		piecesStack[pos].unshift(pieces[i]);
	}
}

function draw(num) {
 // Refresh canvas
  clearCanvas();
 // Create bars and highlight the selected
  for (i = 0 ; i < 3; i++){
  	if (i === pos){
  		sticks[i].selected();
  	} else {
  		sticks[i].notSelected();
  	}
  	sticks[i].show();	
  }
  // Show all pieces of hanoi tower
  for (i = 0; i < num; i++){
  	pieces[i].show();
  }
  pieceMoves.textContent = String(numMoves);
  win();
}


function newGame(){
	// Reset the game values
	gameWin = false;
	pos = 0;
	numMoves = 0;
	picked = null;
	sticks = []; 
	pieces = []; 
	piecesStack = [[],[],[]];
	// Create all pieces of hanoi tower and put all pieces in the left stack
	setup();
	draw(numPieces);
}


function win(){
	// Check the winning condition
	if(piecesStack[2].length === numPieces){
		gameWin = true;
		title.classList.add("win");
	}
}



function keyPressed(key) {
  if (key.keyCode === 38) { // If arrow up pressed do inner if
  	if (picked === null && piecesStack[pos].length > 0 && !gameWin){ // If not picked piece and piece stack not empty and game not won do pick()
    	picked = piecesStack[pos].pop();
    	picked.pick();
    	numMoves++;
  	}
  } else if (key.keyCode === 40) {
  	highestPieceWeight = piecesStack[pos][piecesStack[pos].length - 1]; // Store piece value
  	if(highestPieceWeight !== undefined){ // If stored value is different than undefined store it weight attribute
  		highestPieceWeight = highestPieceWeight.weight;
  	} // If a piece was picked and picked weight is less than top most piece weight or stack is empty do release() 
  	if (picked !== null && (picked.weight < highestPieceWeight || highestPieceWeight === undefined)) {
    	picked.release();
    	piecesStack[pos].push(picked);
    	picked = null;
  	}
  } else if (key.keyCode === 39) { // Change current piece stack to the right if possible
  	if(pos < piecesStack.length - 1) {
	  	if (picked !== null){
		    picked.dir(1);
	  	}
		pos++;
	}
  } else if (key.keyCode === 37) { // Change current piece stack to the left if possible
  	if (pos > 0){
	    if (picked !== null){
		    picked.dir(-1);
	  	}
	    pos--;
  	}
  }
  draw(numPieces);
}


function clearCanvas(){
  	brush.clearRect(0, 0, 1230, canvasHeight); 
} 

function resizeCanvas(){
	canvasHeight = 4 * scl * numPieces;
	canvasWidth = 0.9 * canvasContainer.offsetWidth;
	if (canvasWidth > 1230){
		canvasWidth = 1230
	}
	canvas.width = String(canvasWidth);
	canvas.height = String(canvasHeight);
	scl = 0.0085 * canvasWidth;
}


function resizeSticks(){
	stickSize = (numPieces + 2) * 1.5 * scl;
	for (var i = sticks.length - 1; i >= 0; i--) {
		sticks[i].x = (canvasWidth / 4) * ( i + 1 ) 
	}
}



function resizePieces(){ 
	for ( j = 0; j < piecesStack.length; j++) {
		var length = piecesStack[j].length;
		for ( i = 0; i < length; i++) {
			piecesStack[j][i].x = sticks[j].x - piecesStack[j][i].sizeAdjust * scl;
		    piecesStack[j][i].y = canvasHeight - 1.5 * (i + 1) * scl;  
		}
	}
}



