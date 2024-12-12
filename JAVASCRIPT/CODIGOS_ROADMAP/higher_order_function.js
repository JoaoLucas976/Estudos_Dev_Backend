/*
    Higher Order Functions are functions that return functions as result.
    or functions that recieve functions as arguments.
    There are a few ways of implementing that, as shown bellow.
*/


// Recieving function as arguments
function executeOperation(a, b, operation){
    return operation(a, b);
}

function multiply(a, b){
    return a * b;
}

function sum(a, b){
    return a + b;
}

console.log(executeOperation(2, 3, sum));        // 5
console.log(executeOperation(2, 3, multiply));   // 6

// Returning function as result
function createGreeting(message){
    return function (name){
        console.log(`${message}, ${name}!`)
    }
}

const helloMessage = createGreeting('Hello')
helloMessage('João') // "Hello, João!"

const goodbyeMessage = createGreeting('Good Bye')
goodbyeMessage('Maria') // "Good Bye, Maria!"