const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', function (message, toDo) {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        toDo({
            toDo: 'this is my callback'
        });

        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     date: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('morti');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};