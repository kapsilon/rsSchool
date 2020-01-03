//Solution for rsSchool Task "Multiply" https://github.com/Shastel/multiply
module.exports = function multiply(first, second) {
	//Using BigInt for precision
	let result = BigInt(first) * BigInt(second);
	//Output must be string (without n)
	return result.toString();
};
