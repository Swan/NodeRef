/*
 * This is an example of using JSON (JavaScript Object Notation)
 * To read more about JSON, you can go here:
 *  Resource: https://www.w3schools.com/js/js_json.asp
 */

/*
 * Loading in a built-in Node module to access the file system
 */ 
const fs = require('fs');

/*
 * Creating a Note object that will later be stored.
 */ 
let originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};


/*
 * Turning the object into a string'd verision of the object (JSON), and storing it into a file.
 */
let ogNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', ogNoteString);

/*
 * Reading notes from the file, and parsing it back into an object.
 */
let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);


/*
 * Showing the type of the note, should be an object after parsing it. 
 * Then showing how you can use these values now.
 */
console.log(typeof note);
console.log(note.title);