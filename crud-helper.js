// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Location = require('./models/location');
const Weather = require('./models/weather');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, location, weather
let users, locations, weathers
