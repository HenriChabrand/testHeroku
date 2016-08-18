

// var apiai = require("../module/apiai");
var apiai = require("apiai")

var app = apiai("22db42aa367c4d3b9db67fdf3562c0e0");

var request = app.textRequest('give me the weather');

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();