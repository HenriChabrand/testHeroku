

'use strict';

// var apiai = require("../module/apiai");
var apiai = require("apiai")

var app = apiai("22db42aa367c4d3b9db67fdf3562c0e0");

var sessionId = "henriwhattestisthat";

var user_entities = [{
    name: 'Application',
    sessionId: sessionId,
    extend: false,
    entries: [
        {
            value: 'Firefox',
            synonims: ['Firefox']
        },
        {
            value: 'XCode',
            synonims: ['XCode']
        }, 
        {
            value: 'Sublime Text',
            synonims: ['Sublime Text']
        }
    ]
}];

var user_entities_request = app.userEntitiesRequest(user_entities);

user_entities_request.on('response', function(response) {
    console.log('User entities response: ');
    console.log(response);

    var request = app.textRequest('Open application Firefox');

    request.on('response', function(response) {
        console.log('Query response: ');
        console.log(response);
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end()
});

user_entities_request.on('error', function(error) {
    console.log(error);
});

user_entities_request.end()