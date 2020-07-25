var port = process.env.PORT || 8080;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello Amir World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello Amir 2 World!"
  });
});

app.listen(port);
module.exports = app;
