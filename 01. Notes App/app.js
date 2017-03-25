console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes =  require('./notes.js');

console.log("Result:", notes.add(2, 5));


// let user = os.userInfo();

// // Example of Destructuring -- More information about destructuring can be found here: 
// //https://www.youtube.com/watch?v=PB_d3uBkQPs
// let { username, homedir } = user;

// fs.appendFileSync('greetings.txt', `Hello ${username}. Your homedir is: ${homedir}! You are ${notes.age} years old!\n`);