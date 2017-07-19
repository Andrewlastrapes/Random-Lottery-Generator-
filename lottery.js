var button = document.querySelector("button");
var numbersBox = document.querySelector(".numbersBox");
var fiveNumbersBox = document.querySelector(".fiveNumbersBox");
var oneNumbersBox = document.querySelector(".oneNumbersBox");




function randomFive() {
	var firstFive = []
	
	for (var i = 0; i <= 4; i++ ) {
		firstFive.push(Math.floor(Math.random() * 69))
	}
	return ("Numbers: " + firstFive);
	}


function randomOne(){
	var last = [];
	for (var i = 0; i <= 0; i++ ); {
		last.push(Math.floor(Math.random() * 26))
	}
	return ("Powerball: " + last);
}

function randomDraw(fun, fun2){
	var five = fun();
	var one = fun2();
	fiveNumbersBox.textContent = five;
	oneNumbersBox.textContent = one;

	
}


function generate(thebutton){
	thebutton.addEventListener("click", function(event){
	event.preventDefault();
	randomDraw(randomFive, randomOne);

	})
}


generate(button)
