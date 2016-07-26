var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var index = require('./routes/index');


var app = express();


app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/', index);


var server = app.listen(3000, handleServerStart);

function handleServerStart(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
}
