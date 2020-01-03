//Solution for rsSchool Task "Tic Tac Toe" https://github.com/rolling-scopes-school/tic-tac-toe
class TicTacToe {
	constructor() {
		//Field 3x3
		this.fieldValue = [["", "", ""], ["", "", ""], ["", "", ""]];
		//X by tests
		this.currentPlayerSymbol = "x";
	}

	getCurrentPlayerSymbol() {
		return this.currentPlayerSymbol;
	}

	getFieldValue(rowIndex, colIndex) {
		let fieldValue;
		if (this.fieldValue[rowIndex][colIndex]) {
			fieldValue = this.fieldValue[rowIndex][colIndex];
		} else {
			fieldValue = null;
		}
		return fieldValue;
	}

	nextTurn(rowIndex, colIndex) {
		if (this.fieldValue[rowIndex][colIndex] == "") {
			this.fieldValue[rowIndex][colIndex] = this.currentPlayerSymbol;
			if (this.currentPlayerSymbol == "x") {
				this.currentPlayerSymbol = "o";
			} else {
				this.currentPlayerSymbol = "x";
			}
		}
	}

	getWinner() {
		let winner;
		if (this.getWinnerBySymbol("x")) {
			winner = "x";
		} else if (this.getWinnerBySymbol("o")) {
			winner = "o";
		} else {
			winner = null;
		}
		return winner;
	}

	getWinnerBySymbol(symbol) {
		if (
			//Horizontal lines
			(this.fieldValue[0][0] == symbol &&
				this.fieldValue[0][1] == symbol &&
				this.fieldValue[0][2] == symbol) ||
			(this.fieldValue[1][0] == symbol &&
				this.fieldValue[1][1] == symbol &&
				this.fieldValue[1][2] == symbol) ||
			(this.fieldValue[2][0] == symbol &&
				this.fieldValue[2][1] == symbol &&
				this.fieldValue[2][2] == symbol) ||
			//Vertical lines
			(this.fieldValue[0][0] == symbol &&
				this.fieldValue[1][0] == symbol &&
				this.fieldValue[2][0] == symbol) ||
			(this.fieldValue[0][1] == symbol &&
				this.fieldValue[1][1] == symbol &&
				this.fieldValue[2][1] == symbol) ||
			(this.fieldValue[0][2] == symbol &&
				this.fieldValue[1][2] == symbol &&
				this.fieldValue[2][2] == symbol) ||
			//Diagonal lines
			(this.fieldValue[0][0] == symbol &&
				this.fieldValue[1][1] == symbol &&
				this.fieldValue[2][2] == symbol) ||
			(this.fieldValue[0][2] == symbol &&
				this.fieldValue[1][1] == symbol &&
				this.fieldValue[2][0] == symbol)
		) {
			return symbol;
		} else {
			return null;
		}
	}

	noMoreTurns() {
        //Search blank fields
        //this.fieldValue.join.length == 9
		for (let i = 0; i <= 2; i++) {
			for (let j = 0; j <= 2; j++) {
				if (this.fieldValue[i][j] == "") {
					return false;
				}
			}
		}
		return true;
	}

	isDraw() {
        //By description
        if (this.noMoreTurns() && !this.getWinner()) {
            return true
        } else {
            return false
        }
    }

	isFinished() {
        //By description
        if (this.getWinner() || this.isDraw()) {
            return true
        } else {
            return false
        }}
}

module.exports = TicTacToe;
