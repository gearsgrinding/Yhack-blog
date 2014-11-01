var express = require('express');
//create the app itself from Express
var app = express();
//create a router object that calls the router.js file
var router = require("./routes/router.js");


app.get('/', router.launch);
var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log("Listening on " + port);
});

app.get('/pdf', function (req, res) {
    var doc = new Pdf();
    doc.text("Hello World", 50, 50);

    doc.output( function(pdf) {
        res.type('application/pdf');
        res.end(pdf, 'binary');
    });
});