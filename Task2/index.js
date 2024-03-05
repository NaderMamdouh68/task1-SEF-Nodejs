const geocode = require('./geocode');
const forecast = require('./forecast');



geocode('chicago', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);

    if (!error) {
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            console.log('Error', error);
            console.log('Data', forecastData);
        });
    }
});


