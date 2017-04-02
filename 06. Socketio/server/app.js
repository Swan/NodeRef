const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage}  = require('./utils/message');
const {isRealString} = require('./utils/validation');

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {

    console.log('New user connected');



    socket.on('join', (params, callback) => {
        if (!isRealString(params.name) || !isRealString(params.room)) {
            callback('Name and room name are required.')
        }

        socket.join(params.room);
        // socket.leave(params.room);

        // io.to(roomName).emit
        // socket.broadcast.to(roomName).emit()
        // socket.emit
        socket.emit('newMessage', generateMessage('Flamingo', 'Welcome to ' + params.room));
        socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined the room.`));
        callback();
    });

    socket.on('createMessage', (message, callback) => {
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();

    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log('Server started on port:', port)
});
