const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes =  require('./notes.js');

// process.argv || yargs.argv - List of all arguments given when running the application. (example: node app.js list)
const argv = yargs.argv;
let command = argv._[0] || process.argv[2];

// Commands
if (command === 'add') {

    let note = notes.addNote(argv.title, argv.body);
    (note) ? console.log(`----New Note Created----\nTitle: \t${note.title} \nBody: \t${note.body}`) : console.log("Error: Duplicate Note Title");
     

} else if (command === 'list') {

    notes.getAll();

} else if (command === 'read') {

    notes.getNote(argv.title);

} else if (command === 'remove') {

    let noteRemoved = notes.removeNote(argv.title);
    let message = (noteRemoved) ? `Note: ${argv.title} was removed.` : "Error: Invalid note";
    console.log(message);

} else {

    console.log('Command not recognized');

}