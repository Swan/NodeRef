let socket = io();


function scrollToBottom() {

    // Selectors
    var messages = $('#messages');
    var newMessage = messages.children('li:last-child');

    // Heights - For autoscrolling
    var clientHeight = messages.prop('clientHeight');
    var scrollTop = messages.prop('scrollTop');
    var scrollHeight = messages.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight(); // Getting height of new message
    var lastMessageHeight = newMessage.prev().innerHeight();

    if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
        messages.scrollTop(scrollHeight);
    }

}



socket.on('connect', function() {
    var params = $.deparam(window.location.search);

    socket.emit('join', params, function(err) {
        if (err) {
            alert(err);
            window.location.href = '/';
        } else {
            console.log('No error');
        }
    });
});

// socket.on -- listening for events from the server to the client
socket.on('disconnect', function() {
    console.log('Disconnect from the server');
});


socket.on('newMessage', function(message) {
    var formattedTime = moment(message.createdAt).format('h:mm a');    
    var template = $('#message-template').html();

    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    });

    $('#messages').append(html);
    scrollToBottom();
});


socket.on('newLocationMessage', function(message) {

    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = $('#location-message-template').html();

    var html =  Mustache.render(template, {
        from: message.from,
        createdAt: formattedTime,
        url: message.url
    });


    $('#messages').append(html);
    scrollToBottom();
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