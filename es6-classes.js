class Person {
    // constructor -- called automatically upon instantiation
    constructor (name, age) {
        // "this" is how you customize the individual instance
        this.name = name;
        this.age = age;
    }

    getUserDescription () {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

let me = new Person('Swan', 19);
console.log('this.name', me.name);
console.log('this.age', me.age);
let description = me.getUserDescription();
console.log(description);