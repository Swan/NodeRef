'use strict';

const mongoose = require('mongoose');

// Let mongoose use ES6 promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let newTodo = new Todo({
    text: '  Edit this video.   '
});

newTodo.save()
    .then((doc) => {
        console.log('Saved Todo', doc);
    })
    .catch((e) => {
        console.log('Unable to save Todo', e);
    });



// User Challenge
let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    }
})


let newUser = new User({
    email: 'the@swan.moe'
});

newUser.save()
    .then((user) => {
        console.log('New user created',  user);
    })
    .catch((err) => {
        console.log('Unable to create new user:', err);
    })