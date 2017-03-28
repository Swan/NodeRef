const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello, Express!</h1>');
    res.json({
        name: 'Swan',
        likes: [
            'Biking', 
            'Cities'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.status(500).json({
        status: 500,
        error: 'Unable to complete request.'
    });
});

app.listen(3000, () => {
    console.log('Server Started');
});