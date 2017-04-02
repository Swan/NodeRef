// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    (err) ? console.log('Unable to connect to MongoDB server') : console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     (err) ? console.log('Unable to insert todo', err) : console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into users collection (name, age, location)
    // db.collection('Users').insertOne({

    //     name: "peppy",
    //     age: 19,
    //     location: "Australia"
    // }, (err, result) => {
    //     (err) ? console.log('Unable to insert user', err) : console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});