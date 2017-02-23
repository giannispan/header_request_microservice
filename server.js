//Required modules
var http = require('http')
var express = require('express')

// Build the app
var app = express();

//get request
app.get('/', function (req, res) {
//request ip address
var ip = req.connection.remoteAddress
//request language
var language = req.headers['accept-language']
//user-agent
var agent = req.headers['user-agent']
  res.send({ipaddress: ip, language: language, software: agent})
})

// Start server up!
http.createServer(app).listen(8080);