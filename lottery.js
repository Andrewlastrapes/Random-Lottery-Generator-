var button = document.querySelector("button");
var numbersBox = document.querySelector("numbersBox");
var fiveNumbersBox = document.querySelector("fiveNumbersBox");
var twoNumbersBox = document.querySelector("twoNumbersBox");




function randomFive() {
	var firstFive = []
	
	for (var i = 0; i <= 4; i++ ) {
	firstFive.push(Math.floor(Math.random() * 69))
	}
	return ("Your numbers are: " + firstFive);
	}

function randomTwo(){
	var lastTwo = [];
	for (var i = 0; i <= 1; i++ ); {
	lastTwo.push(Math.floor(Math.random() * 26))
	}
	return ("Your numbers are: " + lastTwo);
}

function randomDraw(){
	randomFive();
	randomTwo();
}


function generate(thebutton){
	thebutton.addEventListener("click", function(event){
	event.preventDefault();
	randomDraw();
		
	})
}



