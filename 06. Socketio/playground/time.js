// Jan 1st 1970 00:00:00 am
const moment = require('moment');

// let date = new Date();
// console.log(date.getMonth());
let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let date = moment(1234);
date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));