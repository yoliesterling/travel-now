const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();



// connect to MongoDB with mongoose
require('./config/database');

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(express.json());



app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const tripsRouter = require('./routes/api/trips');
  
  app.use('/trips', tripsRouter);
 


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});