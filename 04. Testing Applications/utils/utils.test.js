const utils = require('./utils.js');

it('should add two numbers.', () => {
    let res = utils.add(33, 11);
    if (res !== 44) {
        throw new Error(`Expected 44, but got ${res}`);
    }
});

it('should square a number.', () => {
    let res = utils.square(5);
    if (res !== 25) {
        throw new Error(`Expected 25, but got ${res}`);        
    }
});