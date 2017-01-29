//https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
var express = require('express');
var underscore  = require("underscore");
var app = express();
var fs = require("fs");

app.get('/listFortunes', function (req, res) {
   fs.readFile( __dirname + "/" + "fortunes.json", 'utf8', function (err, data) {
       console.log( "listFortunes" );
       res.end( data );
   });
})

app.get('/randomFortune', function (req, res) {
   fs.readFile( __dirname + "/" + "fortunes.json", 'utf8', function (err, data) {
     var fortunes = JSON.parse(data);
     var randomIndex = underscore.random(0, fortunes.length-1)
       console.log( "randomFortune" );
       res.end( fortunes[randomIndex]  );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  host = '127.0.0.1';
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
