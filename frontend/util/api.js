import request from 'superagent';

const getWeather = (city) => {
  const query = city ? `?city=${city}` : undefined;

  return request.get(`http://localhost:3001/${query}`);
};

export default { getWeather };