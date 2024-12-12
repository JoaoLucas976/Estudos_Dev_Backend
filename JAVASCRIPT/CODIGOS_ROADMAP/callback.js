/*
    Callback functions are functions that are passed as arguments to other function
    There are two main types: syncronous and asyncronous
    Syncronous callback functions are those that are executed immediately inside the function that recieved them
    Asyncronous callback functions are those that are executed after the conclusion of an asyncronous operation, like a network request
*/

// Syncronous callback example
function greeting(name, callback){
    console.log(`Hello ${name}`);
    callback()
}
function goodBye(){
    console.log('Good Bye')
}

greeting('João', goodBye);

// Asyncronous callback example
function makeRequest(url, callback){
    setTimeOut(() => {
        console.log("Request to " + url + " completed.");
        callback();
    }, 2000);
}

function processResponse(){
    console.log("Processing response...");
}

makeRequest("http://www.google.com", processResponde); // After 2 seconds: "Request to http://www.google.com completed."