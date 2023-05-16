'use strict';

// create express server
const express = require('express');
const app = express();
const cors = require('cors');

// import custom middleware
const notFound = require('../src/error-handlers/404');
const errorHandler = require('../src/error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

// use global middleware
app.use(cors());
app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
	res.status(200).send('home route!');
});

app.get('/test', (req, res) => {
	res.status(200).json({ status: 200, message: 'Successful test!' });
});

app.get('/person', validator, (req, res, next) => {
	res.status(200).json({ name: req.query.name });
});

// use middleware for error and 404
app.use('*', notFound);
app.use(errorHandler);

const start = port =>
	app.listen(port, (req, res) => {
		console.log(`listening on port: ${port}`);
	});

module.exports = { start, app };
