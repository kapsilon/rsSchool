//Solution for rsSchool Task "Doubly linked list" https://github.com/rolling-scopes-school/doubly-linked-list
const Node = require("./node");
//Node .data .prev .next

class LinkedList {
	constructor() {
		//From tests #constructor & #append
		this.length = 0;
		this._head = new Node();
		this._tail = new Node();
		this._head.next = 1;
		this._tail.prev = 0;
	}

	head() {
		return this._head.data;
	}

	tail() {
		return this._tail.data;
	}

	append(data) {
		if (this.length == 0) {
			//Head and tail is one element
			this._head.data = data;
			this._tail.data = data;
			this.length++;
		} else {
			this._tail.next = this.length;
			//New element with new index to tail
			let newNode = new Node(data, this.length, null);
			this._tail = newNode;
			this.length++;
		}
	}

	at(index) {}

	insertAt(index, data) {}

	isEmpty() {}

	clear() {}

	deleteAt(index) {}

	reverse() {}

	indexOf(data) {}
}

module.exports = LinkedList;
