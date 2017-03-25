console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes =  require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Andrew'));

let filteredArray = _.uniq(['Swan', 1, 2, 'Swan', 3, 9, 12, 'Swan']);
console.log(filteredArray);

// console.log("Result:", notes.add(2, 5));

// let user = os.userInfo();

// // Example of Destructuring -- More information about destructuring can be found here: 
// //https://www.youtube.com/watch?v=PB_d3uBkQPs
// let { username, homedir } = user;

// fs.appendFileSync('greetings.txt', `Hello ${username}. Your homedir is: ${homedir}! You are ${notes.age} years old!\n`);