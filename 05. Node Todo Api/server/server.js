'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const mongoose = require('./db/mongoose');
const Todo = require('./models/todo');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((newTodo) => {
            res.send(newTodo);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


app.get('/todos', (req, res) => {
    Todo.find()
        .then((todos) => {
            res.send({todos})
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


// GET /Todos/:id
app.get('/todos/:id', (req, res) => {

    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('ID not found.');
    } 

    Todo.findById(id)
        .then((todo) => {
            (todo) ? res.send({todo}) : res.status(404).send('Id not found.');
        })
        .catch((err) => {
            res.status(400).send();
        })
    
});

app.listen(3000, () => {
    console.log('Server started on port: 3000');
});




