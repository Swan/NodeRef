const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (str) => {
    return str.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to the website!' 
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About Page',
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