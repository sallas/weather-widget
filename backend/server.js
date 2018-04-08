const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const getWeather = require('./weatherWidgetNode');

app.use(cors());

app.get('/', async (req, res) => res.send(await getWeather(req.query.city)));

app.listen(port, () => console.log(`Listening on port ${port}!`));