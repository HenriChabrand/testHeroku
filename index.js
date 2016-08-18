var express = require('express')
var app = express()


var apiai = require('apiai');
 
var app = apiai("798d7a884de94566872e37c9959f1712");
 
var request = app.textRequest('Give me th weather in Paris');


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {

	 
	 
	request.on('response', function(response) {
	    console.log(response);
	});
	 
	request.on('error', function(error) {
	    console.log(error);
	});
	 
	request.end()
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
