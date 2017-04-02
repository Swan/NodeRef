/*
 * The point of this file is to provide an understanding on how asynchronous programming in JavaScript works. 
 * In short, a function is called, and ONLY AFTER it's done executing it'll run a callback function.
 * This allows the process to be non-blocking.
 * For more information, look up the difference between blocking & non-blocking.
 * 
 * Resources: 
 *  http://electronics.stackexchange.com/questions/91688/difference-between-blocking-and-nonblocking-assignment-verilog
 *  http://softwareengineering.stackexchange.com/questions/202047/what-determines-which-javascript-functions-are-blocking-vs-non-blocking
 */

console.log('Startng App');

// This function gets fired off, and waits for 2 seconds before executing
setTimeout(() => {
    console.log("Inside of Callback");
}, 2000);

// This function gets fired off, but executes AFTER console.log('Finishing App'), even though the setTimeout is 0 seconds. 
// This has to do with the callback getting sent to the Callback Queue, where it waits for the Call Stack to be empty.
setTimeout(() => {
    console.log("Lol");
}, 0);

console.log('Finishing App');


