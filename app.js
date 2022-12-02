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
// serve static files
app.use(express.static(path.join(__dirname, 'public')));
// morgan
app.use(morgan('dev'));
// to parse data returned from the front end form - needed to parse the data returned from the create route
app.use(express.urlencoded({ extended: true }));

// routers
app.use('/', blogRouter);

// export app
module.exports = app;
