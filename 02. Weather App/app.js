const request = require('request');
const yargs = require('yargs');

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

let encodedAddr = encodeURIComponent(argv.address);


request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
    json: true
}, (error, response, body) => {

    if (error) {
        console.log('Unable to connect to Google servers.');
    } else if (response.statusCode !== 200 || body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address');
    } else if (body.status === 'OK') {
        console.log(`Full Address: ${body.results[0].formatted_address}.`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }

});