// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    (err) ? console.log('Unable to connect to MongoDB server') : console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('58dc052dc0839a0dafe1ab1f')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count: ${count}`);

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.close();
});