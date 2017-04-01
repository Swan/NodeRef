// Jan 1st 1970 00:00:00 am
const moment = require('moment');

// let date = new Date();
// console.log(date.getMonth());

let date = moment();
date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));