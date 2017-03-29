const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    (err) ? console.log('Unable to connect to MongoDB server') : console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     (err) ? console.log('Unable to insert todo', err) : console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into users collection (name, age, location)
    db.collection('Users').insertOne({
        name: "Swan",
        age: 19,
        location: "The Pond"
    }, (err, result) => {
        (err) ? console.log('Unable to insert user', err) : console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});