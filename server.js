// Grab some stuff
require('newrelic');
var express = require('express');
var app = express();

// Some settings
process.env.ENV = process.env.ENV || 'staging';
process.env.PORT = process.env.PORT || 8080;

// Where to find the client
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

// Listen for incoming requests
app.listen(process.env.PORT);