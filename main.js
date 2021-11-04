function Calc(operation, first, second) {
	let numberError = typeof first != "number" || typeof second != "number";
	let zeroError = (operation == "/" || operation == "%") && second == "0";

	if (numberError || zeroError) return "Error";
	switch (operation) {
		case "+":
			return first + second;
		case "-":
			return first - second;
		case "*":
			return first * second;
		case "/":
			return first / second;
		case "%":
			return first % second;
		case "**":
			return first ** second;
		default:
			return "Unknown operation";
	};
};

console.log(Calc('-', 10, 25));
console.log(Calc('/', 10, 0));
console.log(Calc('%', 10, 0));
console.log(Calc('*', "10", 25));
console.log(Calc('', 10, 25));
