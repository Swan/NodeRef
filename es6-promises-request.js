const request = require('request');

let geocodeAddress = (address) => {

    return new Promise((resolve, reject) => {

        let encodedAddr = encodeURIComponent(address);
            request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`,
                json: true
            }, (error, response, body) => {

                if (error) {
                    reject('Unable to connect to Google servers.');
                } else if (response.statusCode !== 200 || body.status === 'ZERO_RESULTS') {
                    reject('Unable to find that address');
                } else if (body.status === 'OK') {
                    resolve(body);
                }
            });
    });
};

geocodeAddress('02453').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch((errorMessage) => {
    console.log(errorMessage)
});