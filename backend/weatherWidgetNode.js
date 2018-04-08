const request = require('superagent');
const URI = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '166d00e26d3ff2c6149e89feccc5c59a';
const defaultCity = 'Copenhagen';

const getWeather = async (city = defaultCity) => {
  const response = await request.get(`${URI}q=${city},dk&appid=${apiKey}`);
  const weather = response.body;
  return weather;
};

module.exports = getWeather;