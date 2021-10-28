var pos = 0;  // Numero da pergunta atual menos 1
var corrects = 0; // Numero de respostas acertadas
var answered = false; // Variavel que permite passar para a próxima pergunta
var question = document.querySelector("#question");
var questionNumber = document.querySelectorAll(".questionNum");
var answers = document.querySelectorAll(".questionAnswer")
var items = document.querySelectorAll(".items");
var menu = document.querySelectorAll(".menu");
menu[0].addEventListener("click", newGame);
menu[1].addEventListener("click", nextQuestion);
shuffle(questions);
shuffle(questions[pos].ans);
setAnswers();
setQuestion();
setClickers();

function setAnswers(){
	for (var i = answers.length - 1; i >= 0; i--) {
		items[i].textContent = questions[pos].ans[i];
	}
}

function setQuestion(){
	question.innerHTML = questions[pos].ask;
}

function setClickers(){
	for (var i = items.length - 1; i >= 0; i--) {
		if (items[i].textContent === questions[pos].rightAnswer){
			answers[i].addEventListener("click", correct);
		} else {
			answers[i].addEventListener("click", wrong);		
		}
	}
}

function resetClickers(){
	for (var i = items.length - 1; i >= 0; i--) {
		answers[i].removeEventListener("click", correct);
		answers[i].removeEventListener("click", wrong);
	}
}

function correct(){
	corrects ++;
	answered = true;
	this.classList.add("correct");
	questionNumber[pos].classList.add("correct");
	resetClickers();
}

function wrong(){
	answered = true;
	this.classList.add("wrong");
	questionNumber[pos].classList.add("wrong");
	resetClickers();
}

function nextQuestion(){
	if (pos < 9 && answered) {
		pos ++;
		answered = false;
		resetAnswers();
		shuffle(questions[pos].ans);
		setAnswers();
		setQuestion();
		setClickers();
	} else if (pos === 9) {
		question.textContent = String(corrects) + "/10";
		question.classList.add("big"); 
	}
}


function resetAnswers(){
	for (var i = answers.length - 1; i >= 0; i--) {
		answers[i].classList.remove("wrong");
		answers[i].classList.remove("correct");
	}
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function newGame(){
	question.classList.remove("big");
	shuffle(questions);
	pos = -1;
	answered = true;
	corrects = 0;
	for (var i = questionNumber.length - 1; i >= 0; i--) {
		questionNumber[i].classList.remove("correct");
		questionNumber[i].classList.remove("wrong");
	}
	nextQuestion();
}