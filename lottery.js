
function randomFive() {
	firstFive = []
	
	for (var i = 0; i <= 4; i++ ) {
	firstFive.push(Math.floor(Math.random() * 69))
	}
	return ("Your numbers are: " + firstFive)
	}

function randomTwo(){
	lastTwo = []
	for (var i = 0; i <= 1; i++ ) {
	lastTwo.push(Math.floor(Math.random() * 26))
	}
	return ("Your numbers are: " + lastTwo)

}

console.log(randomFive())
console.log(randomTwo())
	

// function generate(){
// 	addEventListener("click", randomNums(){
		
// 	}
// }
