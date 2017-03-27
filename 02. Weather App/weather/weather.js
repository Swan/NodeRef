const request = require('request');

let getWeather = (lat, lng, callback) => {

    // API key can be found by going to Forecast.io
    let apiKey = ''; 

    request({
        url: `https://api.darksky.net/forecast/${apiKey}/42.3624504,-71.2577233`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature                
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });

};


module.exports = {
    getWeather
};