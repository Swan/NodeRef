/*
 * Hashing - One-way cryptography. Useful for storing passwords or checksums
 * Read More about hashing and the crypto-js module here: 
 *  Resource: https://www.npmjs.com/package/crypto-js
 */
const {SHA256} = require('crypto-js');

/*
 * Hashing the "messagge" in SHA256
 */ 
const SALT = 'some_random_string_you_should_not_tell_anyone_about'
let message = 'I am user number 3';
let hash = SHA256(message + SALT).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);


let data = {
    id: 4
};

let token = {
    data, 
    hash: SHA256(JSON.stringify(data) + SALT).toString()
};


/*
 * Even if the data was changed on the client side, the user doesn't have access to the secret, so it'll fail as well.
 * They can change the data client side, but if they don't have the secret, we can easily tell, because it won't match.
 */

// Failing Case (Data Id was changed)
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data + SALT)).toString();

// Passing Case (Data was not changed)
token.data.id = 4;
token.hash = SHA256(JSON.stringify(token.data + SALT)).toString();
console.log('Token Hash:', token.hash);


let resultHash = SHA256(JSON.stringify(token.data + SALT)).toString();
console.log('ResultHash:', resultHash)


/*
 * Comparing both hashes
 */
if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Dont trust');
}

