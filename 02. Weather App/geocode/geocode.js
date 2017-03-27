const request = require('request');

let geocodeAddress = (address, callback) => {

    let encodedAddr = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('Unable to connect to Google servers.');
        } else if (response.statusCode !== 200 || body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = {
    geocodeAddress
};