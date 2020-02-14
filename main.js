class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) { // O(1) or constant complexity
        /* If the stack is empty, then the node will be the
        top of the stack*/
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* IF the stack already has something, 
        thien create a new node, 
        add data to the new node, and have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() { // O(1) or constant complexity
        /* In order to remove the top of the stack, you have to 
        point the pointer to the next item and that next item becomes
        the top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function main() {
    const starTrek = new Stack
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    console.log(starTrek)
}

console.log(main())