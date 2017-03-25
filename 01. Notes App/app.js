const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes =  require('./notes.js');

// process.argv || yargs.argv - List of all arguments given when running the application. (example: node app.js list)
const argv = yargs.argv;
let command = argv._[0] || process.argv[2];
console.log(argv);

// Commands
if (command === 'add') {

    notes.addNote(argv.title, argv.body);

} else if (command === 'list') {

    notes.getAll();

} else if (command === 'read') {

    notes.getNote(argv.title);

} else if (command === 'remove') {

    notes.removeNote(argv.title);

} else {

    console.log('Command not recognized');

}