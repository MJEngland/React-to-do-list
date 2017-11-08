var express = require ('express');

var app = express();

mongoose.connect('mongodb://localhost/todo', {useMongoClient: true});
