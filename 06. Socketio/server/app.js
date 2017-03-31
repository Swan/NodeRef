const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    // emit -- sending from server to client
    socket.emit('newEmail', {
        from: 'the@swan.moe',
        text: 'Hey. What\'s up?!',
        createdAt: 123
    });

    socket.emit('newMessage', {
        from: 'AiAe',
        text: '(╯°□°）╯︵ ┻━┻', 
        createdAt: 03312017
    });

    // socket.on -- listening to received messages from the client
    socket.on('createEmail',  (newEmail) => {
        console.log('createEmail:', newEmail);
    });

    socket.on('createMessage', (newMessage) => {
        console.log('New message sent from the client', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log('Server started on port:', port)
});
