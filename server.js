var express = require('express');
var app = express();
app.use(express.static(__dirname + '/src'));

app.listen(8081);
console.log("Listening...8081");
