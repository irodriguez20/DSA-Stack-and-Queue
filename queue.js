class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = this.next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.prev = null;
    }

    enqueue(data) { // O(1) or constant complexity
        const node = new Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() { // O(1) or constant complexity
        //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        //If this is the last item in the queue 
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }

    display() {
        if (this.first === null) {
            return 'empty';
        }
        const node = this;
        return node;
    }

}

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
starTrekQ.dequeue();
starTrekQ.dequeue();
console.log(starTrekQ);

function peek(starTrekQ) {
    let node = starTrekQ.display();
    return node.first;
}
console.log(peek(starTrekQ))

function isEmpty(queueToCheck) {
    let node = peek(queueToCheck);
    if (node === undefined) {
        return `is Empty`
    }
    return node.first;
}
const emptyQ = new Queue();
console.log(isEmpty(emptyQ));