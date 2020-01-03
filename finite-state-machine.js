//Solution for rsSchool Task "Morse code decoder" https://github.com/kapsilon/morse-decoder
class FSM {
	/**
	 * Creates new FSM instance.
	 * @param config
	 */
	constructor(config) {
		if (!config) {
			throw new Error();
		}
		this.initial = config.initial;
		this.state = this.initial;
		this.states = config.states;
		this.statePrevious = this.state;
		this.stateUndone = this.state;
	}

	/**
	 * Resets FSM state to initial.
	 */
	reset() {
		this.state = this.initial;
	}

	/**
	 * Returns active state.
	 * @returns {String}
	 */
	getState() {
		return this.state;
	}

	/**
	 * Goes to specified state.
	 * @param state
	 */
	changeState(state) {
		if (typeof this.states[state] === "object") {
			//Undo-redo feature
			this.statePrevious = this.state;
			//Changing state
			this.state = state;
			//Undo-redo feature
			this.stateUndone = this.state;
		} else {
			throw new Error();
		}
	}

	/**
	 * Changes state according to event transition rules.
	 * @param event
	 */
	trigger(event) {
		//New state by event from transitions by state (in test)
		let newState = "";
		newState = this.states[this.state].transitions[event];

		if (newState) {
			//Undo-redo feature
			this.statePrevious = this.state;
			//Changing state
			this.state = newState;
			//Undo-redo feature
			this.stateUndone = this.state;
		} else {
			throw new Error();
		}
	}

	/**
	 * Returns an array of states for which there are specified event transition rules.
	 * Returns all states if argument is undefined.
	 * @param event
	 * @returns {Array}
	 */
	getStates(event) {
		let states = [];
		let statesAll = [];
		//Array of only state names which are keys in
		statesAll = Object.keys(this.states);

		if (event) {
			let s = 0;
			for (let i = 0; i < statesAll.length; i++) {
				let transitions = [];
				//Array of only transitions names which are keys in every object
				transitions = Object.keys(this.states[statesAll[i]].transitions);
				for (let j = 0; j < transitions.length; j++) {
					//Get stat name if transition is right
					if (transitions[j] == event) {
						states[s] = statesAll[i];
						s++;
					}
				}
			}
			//Empty array for not valid array
			if (s == 0) {
				states = [];
			}
		} else {
			states = statesAll;
		}

		return states;
	}

	/**
	 * Goes back to previous state.
	 * Returns false if undo is not available.
	 * @returns {Boolean}
	 */
	undo() {
		if (this.state == this.statePrevious) {
			return false;
		} else {
			this.state = this.statePrevious;
			return true;
		}
	}

	/**
	 * Goes redo to state.
	 * Returns false if redo is not available.
	 * @returns {Boolean}
	 */
	redo() {
		if (this.state == this.stateUndone) {
			return false;
		} else {
			this.state = this.stateUndone;
			return true;
		}
	}

	/**
	 * Clears transition history
	 */
	clearHistory() {
		this.statePrevious = this.state;
		this.stateUndone = this.state;
	}
}

module.exports = FSM;
