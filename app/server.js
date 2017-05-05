var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var router = require('./routes');

var app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use(router);

app.listen(8080,'localhost',() => console.log('listening...'));



