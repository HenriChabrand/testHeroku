var apiai = require('apiai');

var app = apiai("798d7a884de94566872e37c9959f1712");

var request = app.textRequest('Give me the weather in Paris');

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end()