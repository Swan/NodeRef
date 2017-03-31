let socket = io();

socket.on('connect', function() {
    console.log('Connected to server.');
});

// socket.on -- listening for events from the server to the client
socket.on('disconnect', function() {
    console.log('Disconnect from the server');
});


socket.on('newMessage', function(message) {
    console.log('Received New Message:', message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`)

    $('#messages').append(li);
});


$('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, function() {

    });
});