// Created by: Yago Vaz Bezerra de Menezes

var pickedColor;
var modeButtons = document.querySelectorAll(".mode");
var newColor= document.querySelector("#new");
var squares = document.querySelectorAll(".square");
var guess = document.querySelector("h1 span");
var msgDisplay = document.querySelector("#msg");
var title = document.querySelector(".title");
var difficulty = 3;
var colors = generateColors(difficulty);
var gameOver = false;
newColors();
newColor.addEventListener("click", newColors);

// add event listeners to all mode buttons
for (var i = modeButtons.length - 1; i >= 0; i--) {
	modeButtons[i].addEventListener("click", mode);
}


function pickColor(){
	var randNum = randInt(colors.length);
	return colors[randNum];
}


function randInt(num){
	return Math.floor(Math.random() * num)
}


function generateColors(num){
	// Create a Array
	var array = [];
	// Pick random colors and push num times to array
	for (var i = 0; i < num; i++) {
		array.push(randColor());	
	}
	//return full array
	return array
}


function randColor(){
	// Generate random number for "red" between 0 and 255
	var red = randInt(256);
	// Generate random number for "green" between 0 and 255
	var green = randInt(256);
	// Generate random number for "blue" between 0 and 255
	var blue = randInt(256);
	return "RGB(" + red + ", " + green + ", " + blue + ")"

}



function mode(){
	// loop through all mode buttons and remove class chosen
	for (var i = modeButtons.length - 1; i >= 0; i--) {
		modeButtons[i].classList.remove("chosen");
	} 
	// add class chosen to clicked mode
	this.classList.add("chosen");
	if(this === modeButtons[0]){
		difficulty = 3;
	} else if(this === modeButtons[1]){
		difficulty = 6;
	} else {
		difficulty = 9;
		}
	newColors();
}


function chosen(){
	for (var i = difficulty - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = pickedColor;
	}
	gameOver = true;
	title.style.backgroundColor = pickedColor;
	msgDisplay.textContent = "Correto!";
	newColor.textContent = "jogar novamente?";
}


function notChosen(){
	if(!gameOver){
		this.style.backgroundColor = "#2e2e2e";
		msgDisplay.textContent = "Tente Novamente";
	}
}


function newColors(){
	gameOver = false;
	newColor.textContent = "novas cores";
	title.style.backgroundColor = "#2196f3";
	msgDisplay.textContent = "";
	colors = generateColors(difficulty);
	pickedColor = pickColor();
	guess.textContent = pickedColor;
	setupSquares();
}


function setupSquares(){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].removeEventListener("click", chosen);
		squares[i].removeEventListener("click", notChosen);
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
			if (colors[i] === pickedColor){
				squares[i].addEventListener("click", chosen);
			} else {
				squares[i].addEventListener("click", notChosen);
			}
		} else {
			squares[i].style.display = "none";
		}
	}
}