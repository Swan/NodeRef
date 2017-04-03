/*
 *  You can use the Node.js debugger to debug your code in the command line. 
 *  Running `node debug filename.js` will allow you to run the debugger.
 *  You can learn more about Debugging here:
 *      Resource: https://nodejs.org/api/debugger.html
 */

let person = {
    name: "Swan"
};

person.age = 25;

/*
 * Calling the debugger; statement will allow you to skip exactly where you want to start debugging.
 */ 
debugger;

person.name = 'Mike';

console.log(person);