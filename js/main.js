function Calc(operation, first, second) {
	let numberError = typeof first != "number" || typeof second != "number";
	let zeroError = (operation == "/") && second == "0";

	if (numberError || zeroError) return "Error";
	switch (operation) {
		case "+":
			return first + second;
		case "-":
			return first - second;
		case "*":
			return first * second;
		case "÷":
			return first / second;
		default:
			return first;
	};
};


let firstNumber = 0;
let currentNumber = 0;
let operation  = '+';

let resultDisplay = document.querySelector('.calc__result');
let operations = document.querySelectorAll('#operation');
let numbers = document.querySelectorAll('#number');
let backspace = document.getElementById('backspace');
let clear = document.getElementById('clear');

function numberClick() {
	if (currentNumber === null) {
		currentNumber = 0;
	} 
	if (String(currentNumber).length < 15) {
		currentNumber += this.textContent;
		updateResultDisplay();
	}
}

function operatorClick() {
    if (currentNumber != null){
        getResult();
        operation = this.textContent;
        firstNumber = currentNumber;
        currentNumber = null;
    }
    else {
        operation = this.textContent;
    }
}

function getResult() {
	currentNumber = Calc(operation, firstNumber, currentNumber);
	updateResultDisplay();
	if (isNaN(currentNumber)){
        resultDisplay.textContent = 'ERROR';
    }
}

function clearFunction() {
    firstNumber = 0;
    currentNumber = 0;
    operation = "+";
    updateResultDisplay()
}

function backspaceFunction() {
	if (currentNumber === null) {
		firstNumber = +(String(firstNumber).slice(0, String(firstNumber).length - 1));
	} else {
		currentNumber = +(String(currentNumber).slice(0, String(currentNumber).length - 1));
	}
	updateResultDisplay();
}

function updateResultDisplay() {
	currentNumber = Math.floor(currentNumber * 100) / 100;
	let show = String(currentNumber);

	if (show.length >= 8) {
		show = show.slice(show.length - 7);
	}
    resultDisplay.textContent = show;
}

window.onload = function () {
	for (let num of numbers) {
		num.onclick = numberClick;
	}

	for (let op of operations) {
	    op.onclick = operatorClick;
	}

	clear.onclick = clearFunction;
	backspace.onclick = backspaceFunction;
}