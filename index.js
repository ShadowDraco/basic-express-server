'use strict';

// require env and cors
require('dotenv').config();
// set the port
const port = process.env.PORT;
const { start } = require('./src/server');

start(port);
