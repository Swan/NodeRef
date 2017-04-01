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
    li.text(`${message.createdAt} - ${message.from}: ${message.text}`)

    $('#messages').append(li);
});


socket.on('newLocationMessage', function(message) {
    var li = $('<li></li>');
    var a =  $('<a target="_blank">My Current location</a>');

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);

    $('#messages').append(li);
});


$('#message-form').on('submit', function(e) {
    e.preventDefault();

    var messageTextBox = $('[name=message]'); 

    socket.emit('createMessage', {
        from: 'User',
        text: $(messageTextBox).val()
    }, function() {
        $(messageTextBox).val('');
    });
});


var locationButton = $('#send-location');
locationButton.on('click', function() {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser.');
    }

    locationButton.attr('disabled', 'disabled').text('Sending Location...');

    navigator.geolocation.getCurrentPosition(function(position) {

        locationButton.removeAttr('disabled').text('Send Location')

        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });

    }, function() {
        locationButton.removeAttr('disabled').text('Send Location');     
        alert('Unable to fetch location');
    });

});