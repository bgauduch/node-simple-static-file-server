// modules
var express = require("express");
var morgan = require("morgan");
var fs = require('fs');
var path = require('path');

// web app
var app = express();
var port = 8080;

// middleware
app.use(morgan('combined'));
app.use(express.static('public'));

// routes
app.get('/', function (req, res) {
	var response = {'info' : 'Append the file name you want to download to the URL. Example : <domaine>/file.zip', 'availableFiles' : []};

	fs.readdir(path.resolve(__dirname, 'public'), function (err, files) {
		var availablesFiles = [];
		files.forEach( function (file) {
    		availablesFiles.push(file);
    	});

    	response.availableFiles = availablesFiles;
    	res.send(response);
	});
});

// server
var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Simple file server listening at http://%s:%s', host, port);
});

