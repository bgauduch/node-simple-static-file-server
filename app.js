// modules
var express = require("express");
var morgan = require("morgan");

// vars
var app = express();
var port = +process.argv.slice(2) | 9090; // TODO : le numéro de port ne correspond pas

// middleware
app.use(morgan('combined'));
app.use(express.static('public'));

// routes
app.get('/', function (req, res) {
 	res.send('Append the file name you want to download to the URL. Example : 21k.ddns.net/file.zip');
});

// server
var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Simple file server listening at http://%s:%s', host, port);
});