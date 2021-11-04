function Calc(operation, first, second) {
	let numberError = typeof first != "number" || typeof second != "number";
	let zeroError = (operation == "div" || operation == "mod") && second == 0;

	if (numberError || zeroError) return "Error";
	let operations = {
		sum: first + second,
		sub: first - second,
		mult: first * second,
		div: first / second,
		mod: first % second,
		deg: first ** second,
	}
	return operations[operation] ? operations[operation] : "Unknown operation" 
};

console.log(Calc('sub', 10, 25));
console.log(Calc('div', 10, 0));
console.log(Calc('mod', 10, 0));
console.log(Calc('mult', "10", 25));
console.log(Calc('', 10, 25));