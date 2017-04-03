const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes =  require('./notes.js');

// process.argv || yargs.argv - List of all arguments given when running the application. (example: node app.js list)
const titleOptions = {
    describe: 'Title of note',
    demand: true, 
    alias: 't'    
}

const bodyOptions = {
    body: {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
    }   
}
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all of the notes')
    .command('read', 'Read individual note', { title: titleOptions })
    .command('remove', 'Remove a note', { title: titleOptions })
    .help()
    .argv;
let command = argv._[0] || process.argv[2];

// Commands
if (command === 'add') {

    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note added.");
        notes.logNote(note)
    } else {
        console.log("Duplicate Note Title.");
    }

} else if (command === 'list') {

    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {

    let note = notes.getNote(argv.title);

    if (note) {
        console.log("Note Found")
        notes.logNote(note);
    } else {
        console.log("Note not Found");
    }

} else if (command === 'remove') {

    let noteRemoved = notes.removeNote(argv.title);

    if (noteRemoved) {
        console.log("Note Removed Successfully");
        notes.logNote(noteRemoved);
    } else {
        console.log("Not not found.");
    }

} else {

    console.log('Command not recognized');

}

