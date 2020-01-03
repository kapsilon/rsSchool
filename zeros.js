//Solution for rsSchool Task "Zeros" https://github.com/Shastel/zeros
module.exports = function zeros(expression) {
	//Get all multipliers from expression
	let multipliers = [];
	multipliers = expression.split("*");

	//Compute factorials of every multiplier
	for (let i = 0; i < multipliers.length; i++) {
		let length = multipliers[i].length;
		let number;
		if (multipliers[i][length - 2] == "!") {
			number = multipliers[i].substring(0, length - 2);
			multipliers[i] = factorialOdd(number);
		} else if (multipliers[i][length - 1] == "!") {
			number = multipliers[i].substring(0, length - 1);
			multipliers[i] = factorial(number);
		} else {
			multipliers[i] = BigInt(multipliers[i]);
		}
	}

	//Compute multiplication of all expression
	let multiplication = 1n; //BigInteger for precision, yes it's BigInt
	for (let i = 0; i < multipliers.length; i++) {
		multiplierBig = BigInt(multipliers[i]); //BigInteger for precision
		multiplication = multiplication * multiplierBig;
	}

	//Count zeros from end of multiplication as string
	let whileStart = true;
	let multiplicationString = multiplication.toString();
	let lastSymbolIndex = multiplicationString.length - 1;
	let result = 0;
	while (whileStart) {
		if (multiplicationString[lastSymbolIndex - result] == "0") {
			result++;
		} else {
			whileStart = false;
		}
	}
	return result;
};

//Subsidiary Factorial of Number
function factorial(number) {
	let result = BigInt(number); //BigInteger for precision
	while (number > 1) {
		number = number - 1;
		result = result * BigInt(number);
	}
	return result;
}
//Subsidiary Double Factorial of odd/even Number (by task)
function factorialOdd(number) {
	let result = BigInt(number); //BigInteger for precision
	while (number > 2) {
		number = number - 2;
		result = result * BigInt(number);
	}
	return result;
}
