function Calc(operation, first, second) {
	let numberError =  typeof first != "number" || typeof second != "number";
	let zeroError = (operation == "/" || operation == "%") && second == "0";

	if (numberError || zeroError) {
		return "Error";
	} else if (operation == "+") {
		return first + second;
	} else if (operation == "-") {
		return first - second;
	} else if (operation == "*") {
		return first * second;
	} else if (operation == "/") {
		return first / second;
	} else if (operation == "%") {
		return first % second;
	} else if (operation == "**") {
		return first ** second;	
	} else {
		return "Unknown operation";
	}
};

console.log(Calc('-', 10, 25));
console.log(Calc('/', 10, 0));
console.log(Calc('%', 10, 0));
console.log(Calc('*', "10", 25));
console.log(Calc('', 10, 25));