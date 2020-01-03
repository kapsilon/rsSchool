//Solution for rsSchool Task "Morse code decoder" https://github.com/kapsilon/morse-decoder
const MORSE_TABLE = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0"
};

function decode(expr) {
	let letterLength = 10;
	let space = "**********";

	//Count of letters and verify format
	let letterCount = expr.length / letterLength;
	if (!Number.isInteger(letterCount)) {
		console.log("Expression is not in correct format");
		return;
	}

	//String transform to array of each character
	let letterArray = [];
	for (let i = 0; i < letterCount; i++) {
		letterArray[i] = expr.substring(i * letterLength, (i + 1) * letterLength);
	}

	//Find english letters of coded letters by morse table
	let resultArray = [];
	letterArray.forEach((value, index) => {
		if (value == space) {
			resultArray[index] = " ";
		} else {
			//RegExp to replace all occurrences
			value = value.replace(/00/g, "");
			value = value.replace(/10/g, ".");
			value = value.replace(/11/g, "-");
			//Fetch letter from table
			resultArray[index] = MORSE_TABLE[value];
		}
	});
	//Return result as string
	return resultArray.join("");
}

module.exports = {
	decode
};
