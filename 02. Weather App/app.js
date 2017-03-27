const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const request = require('request');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// Get Address
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

// API key can be found by going to Forecast.io
let apiKey = ''; 
request({
    url: `https://api.darksky.net/forecast/${apiKey}/42.3624504,-71.2577233`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        conosle.log('Unable to fetch weather.');
    }
});