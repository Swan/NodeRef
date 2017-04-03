/*
 * Read more about Jsonwebtoken here:
 *  Resource: https://www.npmjs.com/package/jsonwebtoken
 */

const jwt = require('jsonwebtoken');

let data = {
    id: 10
};

let token = jwt.sign(data, '123abc');
console.log(token);

let decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
