//Solution for rsSchool Task "Guessing game" https://github.com/rolling-scopes-school/guessing-game
class GuessingGame {
	constructor() {}

	setRange(min, max) {
		//Set limits of interval
		this.minimum = min;
		this.maximum = max;
	}

	guess() {
		//Get average from binary search wikipedia https://en.wikipedia.org/wiki/Binary_search_algorithm
		this.middle = (this.minimum + this.maximum) / 2;
		//Rounding to integer (ceil or round not floor)
		this.middle = Math.ceil(this.middle);

		return this.middle;
	}

	lower() {
		//Set to first half Min+++++Mid-----Max (Mid is new Max)
		this.maximum = this.middle;
	}

	greater() {
		//Set to second half Min-----Mid+++++Max (Mid is new Min)
		this.minimum = this.middle;
	}
}

module.exports = GuessingGame;
