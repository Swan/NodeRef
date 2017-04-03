/*
 * Moment.js is a Node module that helps EXTREMELY with dates.
 * Provides an easy way to format dates, add to dates, subtract, etc.
 * You can read more about Moment.js here: https://momentjs.com/
 */

/*
 * Loading in the module.
 */
const moment = require('moment');

/*
 * Creating a timestamp in module.
 * Very similar to calling new Date()
 */
let someTimestamp = moment().valueOf();
console.log(someTimestamp);


/*
 * Example of creating a new date, from Unix Epoch time, and running operations on it.*
 */
let date = moment(1234);
date.add(1, 'year').subtract(9, 'months');

/*
 * Formatting dates, read the docs for Moment.js to find out more about this
 */
console.log(date.format('MMM Do, YYYY'));
