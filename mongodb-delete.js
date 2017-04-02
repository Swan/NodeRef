// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    (err) ? console.log('Unable to connect to MongoDB server') : console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: "Walk the dog"}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: "Walk the dog"}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((deletedDoc) => {
        console.log(deletedDoc);
    });

    // db.close();
});