/*
    STACKS
    A stack is a collection of items, wich is caracterized by the operations you can perform on it.
    The two operations you can perform on a stack are:
    - Push: You add to the top of the stack.
    - Pop: You remove from the top of the stack.
    Stack is a Lirst-In-Fist-Out (LIFO) structure
*/

// Stacks in JS with arrays
/*
const myStack = [];
myStack.push('a');
myStack.push('b');
console.log(myStack)
myStack.pop()
console.log(myStack)
myStack.push('c');
myStack.push('d');
console.log(myStack)
*/

// Implementing a Efficient Stack with O(1) time for push/pop

class StackNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(val){
        if (this.size === 0){
            this.top = new StackNode(val);
        } else {
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }

        this.size++;
    }

    pop(){
        if (this.size === 0){
            return null;
        } else {
            const popedNode = this.top;
            this.top = this.top.next;
            this.size--;
            return popedNode.val;
        }
    }

    getTop(){
        return this.top.val;
    }
}

// TOP -> x -> a -> b -> c
const myStack = new Stack();
myStack.push('a');
myStack.push('b');
myStack.push('c');
console.log(myStack.pop());
console.log(myStack.size);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.size);