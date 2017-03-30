const {ObjectID} = require('mongodb');

const mongoose = require('./../server/db/mongoose');
const Todo = require('./../server/models/todo'); 

// let id = '58dc1499ca4d5514c06f7b74';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

// Todo.findById(id)
//     .then((todo) => {
//         if(!todo) {
//             return console.log('Id not found.');
//         }
//         console.log('Todo by Id:', todo);
//     })
//     .catch((err) => {
//         console.log('Id not valid')
//     });