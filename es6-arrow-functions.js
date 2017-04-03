/*
 * Arrow functions is a feature of ECMAScript 6 that allows us to create functions faster with shorter syntex.
 * To learn more about arrow functions, you can look here:
 *  Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */ 


/*
 * Here is an example of an arrow function, where (num1, num2) are the arguments. 
 * () => is the shorthand syntax for defining a function.
 */
let addNumbers = (num1, num2) => {
    return num1 + num2
};

/*
 * However, if you only have one argument, and one return statement, it becomes even shorter
 * where x => is the number passed in, and x * x; is what's being returned.
 */
let squareNumbers = x => x * x;


/*
 * There are some limitations to arrow functions, however, as seen below. 
 */
let user = {
    name: 'Swan',

    /*
     * You cannot use arrow functions in an object. Try running it.
     */
    sayHiGlobal: (num1, num2) => {
        console.log(num1 + num2);
        console.log(`Hi. I'm ${this.name}`);
    },

    /*
     * Instead, here's the proper syntax you should use.
     */ 
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHiGlobal(1, 2);
user.sayHiAlt(1, 2, 3);

