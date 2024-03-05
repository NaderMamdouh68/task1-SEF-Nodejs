const request = require('request');

const geocode = (address, callback) => {

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYwyODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaxk4bXNnYSJ9.qYlrwIqo41gXgNNc4h8yIw`;

    request({ url, json: true }, (error, { body , statusCode}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (statusCode == 401) {
            callback('You are not authorized to access this resource', undefined);
        }else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
            });
        }
    });
}

module.exports = geocode;