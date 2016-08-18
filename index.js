

// var apiai = require("../module/apiai");
var apiai = require("apiai")

var app = apiai("22db42aa367c4d3b9db67fdf3562c0e0");

var entities = [
                    {
                        name: "dwarfs",
                        entries: [
                                    {
                                        value: "Ori",
                                        synonyms: [
                                                    "ori",
                                                    "Nori"
                                                    ]
                                    },
                                    {
                                        value: "bifur",
                                        synonyms: [
                                                    "Bofur",
                                                    "Bombur"
                                                    ]
                                    }
                                ]
                    }
                ];

var request = app.textRequest('Hello ori', {'entities': entities});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();