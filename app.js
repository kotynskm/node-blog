// we will use express for route handling, error handling, database integration etc..
const express = require('express');
const path = require('path');
const morgan = require('morgan');

// import routers
const blogRouter = require('./routes/blogRoutes');

// create an instance of the app object in express
const app = express();

// set view engine
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));

// routers
app.use('/', blogRouter);

// export app
module.exports = app;
