//Requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Globals
var port = 5000;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

//Spin up server
app.listen(port, function (res) {
    console.log('Now listening on: ', port);
});