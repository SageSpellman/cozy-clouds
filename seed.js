require('dotenv').config();
require('./config/database');

// models
const Location = require('./models/location');
const Weather = require('./models/weather');

(async function() {
    try {
      // Clear existing data
      await Location.deleteMany({});
      await Weather.deleteMany({});

// sample locations 
const locations = await Location.create([
    { name: 'New York', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 },
]);

// sample weather data 
const weatherData = [
    { location: locations[0]._id, temperature: 70, description: 'Sunny' },
    { location: locations[1]._id, temperature: 65, description: 'Partly Cloudy' },
];
  // weather data
  const weather = await Weather.create(weatherData);

  console.log('Database seeded successfully!');
  console.log(weather);

  process.exit();
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1); // Exit with error code 1
}
})();