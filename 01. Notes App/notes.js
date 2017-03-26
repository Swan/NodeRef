const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(err) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote =  (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

let getAll = () => {
    console.log('Getting All Notes');
};

let getNote = (title) => {
    let notes = fetchNotes();
    let foundNote = notes.filter((note) => note.title === title);
    return foundNote[0];
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let newNotes = notes.filter((note) => note.title  !== title)
    saveNotes(newNotes); 

    return notes.length !== newNotes.length;
}


let logNote = (note) => {
    return console.log(`---- Note ----\nTitle: ${note.title}\nBody:${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}