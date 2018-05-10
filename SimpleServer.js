

// Parameters
var sitePath = process.argv[2] || ".";
var port = 3001;

// Libraries
var express = require('express');
var app = express();

// Request logging
app.use(function(req, res, next) {
    console.log(req.url);
    next();
});

// Start server
console.log(sitePath);
console.log("Starting server in: " + __dirname + '/' + sitePath);
app._router.get('/gametime', (req, res) => {
      res.sendFile(__dirname + '/' +'LearnCraft/index.html');
});
app._router.get('/login', (req, res) => {
      res.sendFile(__dirname + '/' +'Front/index.html');
});
app.use(express.static(__dirname + '/' + sitePath));
app.use(express.static(__dirname + '/Front'));
app.listen(port, function() {
    console.log("Server running at: http://localhost:" + port)
});
