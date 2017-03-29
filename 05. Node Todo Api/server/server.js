const mongoose = require('mongoose');

// Let mongoose use ES6 promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String  
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

let newTodo = new Todo({
    text: 'Bake a cake',
    completed: true,
    completedAt: 2147483647
});

newTodo.save()
    .then((doc) => {
        console.log('Saved Todo', doc);
    })
    .catch((e) => {
        console.log('Unable to save Todo');
    });