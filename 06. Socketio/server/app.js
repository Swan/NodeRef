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

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log('Server started on port:', port)
});
