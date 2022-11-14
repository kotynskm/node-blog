// we will use express for route handling, error handling, database integration etc..
const express = require('express');
const path = require('path');
// create an instance of the app object in express
const app = express();

// set view engine
app.set('view engine', 'ejs');

// export app
module.exports = app;
