//Solution for rsSchool Task "Expression Calculator" https://github.com/romacher/expression-calculator
/* module.exports = {
    expressionCalculator
} */

function eval() {
	// Do not use eval!!!
	return;
}

/* 
function hack(expression) {
	return expression;
} 
*/

expressionCalculator("  -5-1-20 ");

function expressionCalculator(expr) {
	//Delete all spaces
	expr = expr.replace(/ /g, "");
	echo(expr);

	//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp
	//RegExp for (...) token
	//expr.match(/\([^\(\)]+\)/)

	expr = calculateMultiExpression(expr);
	echo(expr);
	expr = calculateAddExpression(expr);
	echo(expr);
	return Number(expr);
}

//Calculation of multiplication without brackets
function calculateMultiExpression(expression) {
	//Calculate until there are * and /
	let startWhile = true;
	while (startWhile) {
		//Determine what first thing
		let index;
		index1 = expression.indexOf("*");
		index2 = expression.indexOf("/");
		if ((index1 > 0) & (index2 > 0)) {
			if (index1 < index2) {
				index = index1;
			} else if (index2 < index1) {
				index = index2;
			}
		} else if ((index1 > 0) & (index2 < 0)) {
			index = index1;
		} else if ((index1 < 0) & (index2 > 0)) {
			index = index2;
		} else {
			startWhile = false;
			break;
		}
		expression = calculateComplexExpression(expression, index);
	}
	return expression;
}

//Calculation of addition without brackets
function calculateAddExpression(expression) {
	//Calculate until there are * and /
	let startWhile = true;
	while (startWhile) {
		//Determine what first thing
		let index;
		index1 = expression.indexOf("+");
		index2 = expression.indexOf("-", 2); //For negative number
		if ((index1 > 0) & (index2 > 0)) {
			if (index1 < index2) {
				index = index1;
			} else if (index2 < index1) {
				index = index2;
			}
		} else if ((index1 > 0) & (index2 < 0)) {
			index = index1;
		} else if ((index1 < 0) & (index2 > 0)) {
			index = index2;
		} else {
			startWhile = false;
			break;
		}
		expression = calculateComplexExpression(expression, index);
	}
	return expression;
}

//Calculation of two numbers in string
function calculateComplexExpression(expression, index) {
	operator = expression[index];
	stringLeft = expression.substring(0, index);
	stringRight = expression.substring(index + 1);

	//Find number from left
	let indexLeft;
	for (let i = 0; i < stringLeft.length; i++) {
		let iFromEnd = stringLeft.length - 1 - i;
		let char = stringLeft[iFromEnd];
		if (!(Number.isInteger(Number(char)) || char == ".")) {
			// "." for floats
			indexLeft = iFromEnd;
			break;
		}
	}
	//Find number from left
	let indexRight;
	for (let i = 0; i < stringRight.length; i++) {
		let char = stringRight[i];
		if (!(Number.isInteger(Number(char)) || char == ".")) {
			indexRight = i;
			break;
		}
	}

	//Divide expression to atomic form
	stringLeftOrigin = stringLeft.substring(0, indexLeft + 1);
	stringLeft = stringLeft.substring(indexLeft + 1);
	stringRightOrigin = stringRight.substring(indexRight);
	stringRight = stringRight.substring(0, indexRight);
	if (stringRightOrigin == stringRight) {
		stringRightOrigin = "";
	}
	if ((stringLeftOrigin = "-")) {
		stringLeft = "-" + stringLeft;
	}
	//Calculate Expression
	multiplication = calculateSimpleExpression(stringLeft + operator + stringRight);
	expression = stringLeftOrigin + multiplication + stringRightOrigin;

	return expression;
}

//Calculation of very simple string
function calculateSimpleExpression(expression) {
	const operators = ["*", "/", "+", "-"];
	let numbers = [];
	let operator;

	operators.forEach(value => {
		let numbersTemp = [];
		numbersTemp = expression.split(value);
		if (numbersTemp.length > 1) {
			numbers = numbersTemp;
			operator = value;
		}
	});

	return calculate(numbers[0], operator, numbers[1]);
}

//Four calculations of numbers
function calculate(x, operator, y) {
	let result;
	x = Number(x);
	y = Number(y);
	switch (operator) {
		case "+":
			result = x + y;
			break;
		case "-":
			result = x - y;
			break;
		case "*":
			result = x * y;
			break;
		case "/":
			if (y == 0) {
				console.log("TypeError: Division by zero.");
			} else {
				result = x / y;
			}
			break;
		default:
			console.log("Operator is wrong");
			break;
	}
	return result;
}

function echo(something) {
	console.log(something);
}
