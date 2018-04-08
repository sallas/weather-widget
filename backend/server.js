const express = require('express');
const app = express();
const port = 3000;

const getWeather = require('./weatherWidgetNode');

app.get('/', async (req, res) => res.send(await getWeather(req.query.city)));

app.listen(port, () => console.log(`Listening on port ${port}!`));