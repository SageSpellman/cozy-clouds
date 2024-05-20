const axios = require('axios');
require('dotenv').config();

// retrieve api key from environment variables 
const apiKey = process.env.OPENWEATHER_API_KEY;

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// fetch weather date from OpenWeatherMap api
async function fetchWeatherData(location) {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                q: location,
                appid: apiKey
            }
        });

        //extract relevant date from api response 
        const { main, weather } = response.data;
        const temperature = main.temp; 
        const description = weather[0]. description; 

        return { temperature, description };
    } catch (error) {
        throw new Error('Error fetching weather data')
    }
}
module.exports = fetchWeatherData;