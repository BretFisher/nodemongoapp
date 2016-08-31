var express = require('express');
var mongodb = require('mongodb');
// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n Check console for db connection info');
});

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://mongo:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  } else {
    console.log("no connection to db OH NOS!!");
  }
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
