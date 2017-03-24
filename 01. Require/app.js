console.log("Starting app");

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

// Example of Destructuring -- More information about destructuring can be found here: 
//https://www.youtube.com/watch?v=PB_d3uBkQPs
let { username, homedir } = user;

fs.appendFileSync('greetings.txt', `Hello ${username}. Your homedir is: ${homedir}!\n`);