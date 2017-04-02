// let obj = {
//     name: 'Swan'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Swan", "age": 19}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.age);

const fs = require('fs');

let originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

let ogNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', ogNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);