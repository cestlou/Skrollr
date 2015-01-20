var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname)));
var PORT = process.env.PORT || 3000

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

app.listen(PORT);