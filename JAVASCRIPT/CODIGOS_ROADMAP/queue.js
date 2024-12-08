/*
    QUEUE
    A queue is a collection of items, wich is caracterized by the operations you can perform on it.
    The two operations you can perform on a queue are:
    - Enqueue: You add to the back of the stack.
    - Dequeue: You remove from the front of the stack.
    Queue is a First-In-Fist-Out (FIFO) structure
*/

// Implementing a Queue in JS with arrays

/*
const queue = [];
queue.push('a');
queue.push('b');
queue.push('c');
console.log(queue);
queue.shift(queue);
console.log(queue);
*/

// Implementing a Efficient Queue with O(1) runtime

class QueueNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new QueueNode(val);
        if (this.size === 0){
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    }

    dequeue(){
        if (this.size === 0){
            return null
        }

        const removedNode = this.front;

        if (this.size === 1){
            this.back = null;
        }
        this.front = this.front.next;
        this.size--;
        return removedNode.val;
    }
}

// a -> b -> c -> d
// F              B

const myQueue = new Queue();

myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log(myQueue.dequeue());