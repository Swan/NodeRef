/*
 * You can read more about ES6 Classes here:
 *  Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */ 

class Person {
    /*
     * Constructor function is called immediately upon instantion. Useful if you want to set any values.
     */
    constructor (name, age) {
        /*
         * the 'this' keywords is especially useful for customizing/personalizing an individual instance.
         * As you can see here, I'm setting this.name equal to the name that was passed in, and same for the age.    
         */ 
        this.name = name;
        this.age = age;
    }

    /*
     * You can also define functions in a class. In this case, we're just returning a description of the person.
     */
    getUserDescription () {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

/*
 * Here's how you can instantiate a new person, passing in "Swan" for the name, and 19 for the age.
 */ 
let me = new Person('Swan', 19);

/*
 * You can now use the individual values from the declared variable "me."
 * me.name == this.name
 */
console.log('this.name', me.name);


/*
 * You can also call functions on that class, like so. In this case, getUserDescription returns a description
 * about the individual Person.
 */
console.log(me.getUserDescription());