let socket = io();

socket.on('connect', function () {
    console.log('Connected to the server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.emit('createMessage', {
    from: 'Andy',
    text: 'Hey this is andy'
});

socket.on('newMessage', function (email) {
    console.log('new Email', email);
});