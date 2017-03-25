const fs = require('fs');
const _ = require('lodash');

const notes =  require('./notes.js');

// process.argv - List of all arguments given when running the application. (example: node app.js list)
let command = process.argv[2];
console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading one note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognized');
}