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
        // if (this.top === null) {
        //     this.top = new _Node(data, null);
        //     return this.top;
        // }
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

    peek() {
        const node = this.top
        if (node === null) {
            return null;
        }
        return node.data;
    }

    isEmpty() {
        return this.top === null;
    }

    display() {
        return this.top;
    }
}

const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
// starTrek.push('Scotty');
// console.log(starTrek);
// console.log(starTrek.peek());
// console.log(starTrek.isEmpty());
// starTrek.pop();
// starTrek.pop();
// console.log(starTrek);



function is_palindrome(sentence) {
    const palindrome = new Stack();
    let letters = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); //never want to reasign or push to an array received from parameters.

    // Your code goes here
    for (let i = 0; i < letters.length; i++) {
        palindrome.push(letters[i]);
    }

    let reverseWord = "";
    while (palindrome.isEmpty() === false) {
        reverseWord = reverseWord + palindrome.pop()
    }

    return reverseWord === letters;
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function sortStack(stackToSort) {
    const orderedStack = new Stack();
    orderedStack.push(5);

    while (stackToSort.isEmpty() === false) {
        if (stackToSort.peek() >= orderedStack.peek()) {
            const temp = stackToSort.pop();
            orderedStack.push(temp);
        } else {
            if (stackToSort.peek() <= orderedStack.peek()) {
                const temp = stackToSort.pop();
                orderedStack.push(temp);
            }
        }
    }

    return orderedStack;

}
const stackToSort = new Stack();
stackToSort.push(1);
stackToSort.push(2);
stackToSort.push(3);
stackToSort.push(4);
console.log(sortStack(stackToSort));