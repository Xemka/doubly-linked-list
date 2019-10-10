const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        // empty list
        if(this._head == null) {
            this._head = node;
            this._tail = node;
        } else {
        // not-empty list
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }

        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var counter = 0;
        var current = this._head;
        while (counter != index) {
            current = current.next;
            counter++;
        }
        return current.data;
    }

    insertAt(index, data) {
        var counter = 0;
        var current = this._head;
        var node = new Node(data);

        // empty list
        if (this._head == null && index == 0) {
            this._head = node;
            this.tail = node;
            this.length++;
        }

        // non-empty list
        if (this._head != null && index > 0) {
            while (counter != index) {
                current = current.next;
                counter++;
            }
            node.prev = current.prev;
            node.next = current;
            current.prev.next = node;
        }
    }

    isEmpty() {
        if (this.length != 0) 
            return false;
        return true;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return new LinkedList();
    }

    deleteAt(index) {
        var counter = 0;
        var current = this._head;

        if (this._head == this._tail) {
            this._head = null;
            this._tail = null;
        } else {
            while (counter != index) {
                current = current.next;
                counter++;
            }
            current.next.prev = current.prev;
            current.prev.next = current.next;
        }
        this.length--;
        return this;

    }

    reverse() {
        var current = this._head;
        var prev = null;
        while (current != null) {
            var next = current.next;
            // replacing prev and next
            current.next = prev;
            current.prev = next;
            // updating prev
            prev = current;
            // using next to update next element
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        if (!this._head) {
            return -1;
        } else {
            var current = this._head;
            for (var i = 0; i < this.length; i++) {
                if (current.data == data) {
                    return i;
                }
                current = current.next;
            }
            return -1;
        }
    }
}

module.exports = LinkedList;
