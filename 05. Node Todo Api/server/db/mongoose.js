'use strict';

const mongoose = require('mongoose');

// Let mongoose use ES6 promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = mongoose;