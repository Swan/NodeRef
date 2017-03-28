const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to the website!' 
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
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