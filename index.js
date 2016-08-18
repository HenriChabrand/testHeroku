

// var apiai = require("../module/apiai");
var apiai = require("apiai")

var app = apiai("22db42aa367c4d3b9db67fdf3562c0e0");

var entities = [
                    {
                        name: "test",
                        entries: [
    {
        "value": "weather.temperature",
        "synonyms": [
            "temperature"
        ]
    },
    {
        "value": "weather.humidity",
        "synonyms": [
            "humidity"
        ]
    },
    {
        "value": "adress",
        "synonyms": [
            "adress"
        ]
    },
    {
        "value": "geoCode",
        "synonyms": [
            "geoCode",
            "coordinate"
        ]
    },
    {
        "value": "openNow",
        "synonyms": [
            "openNow",
            "open",
            "open now",
            "is open"
        ]
    },
    {
        "value": "artist",
        "synonyms": [
            "artist",
            "band",
            "singer"
        ]
    },
    {
        "value": "spotify.track.previewUrl",
        "synonyms": [
            "preview track",
            "sample track",
            "sample song",
            "sample"
        ]
    },
    {
        "value": "artist.genre",
        "synonyms": [
            "music style"
        ]
    },
    {
        "value": "artist.pictureUrl",
        "synonyms": [
            "show me a picture of"
        ]
    },
    {
        "value": "weather",
        "synonyms": [
            "weather",
            "forecast"
        ]
    },
    {
        "value": "weather.windSpeed",
        "synonyms": [
            "wind speed",
            "the speed of the wind",
            "wind"
        ]
    },
    {
        "value": "spotify",
        "synonyms": [
            "the spotify information"
        ]
    },
    {
        "value": "spotify.artist.external_urls.spotify",
        "synonyms": [
            "open the spotify of",
            "show me the spotify of",
            "show me his spotify",
            "show me her spotify"
        ]
    }
]
                    }
                ];

var request = app.textRequest('Give me the weather', {'entities': entities});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();