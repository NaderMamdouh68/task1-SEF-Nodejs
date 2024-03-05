const requset = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=97d8a516069343a3a9b185557240503&q=${latitude},${longitude}&aqi=no`;

    requset({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.location.name} - It is currently ${body.current.condition.text} with a temperature of ${body.current.temp_c} degrees out. There is a ${body.current.precip_mm}% chance of rain.`);
        }
    });
}

module.exports = forecast;