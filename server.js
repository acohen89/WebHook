const http = require('http');
const mysql = require('mysql');
const express = require('express');
const app = express();
const fs = require('fs');
//const bodyParser = require('body-parser');
//var urlEncodedParser = bodyParser.urlencoded({"extended": false});


/*
app.get('/', function(req, res){
  res.send("this is the home page");
});
app.listen(8901);
console.log("Listening on port 8901");
app.post('/', urlEncodedParser, function(req, res){
    console.log(req);
    fs.writeFile('data.json', req.body , function (err) {
                  if (err) throw err;

});
});*/
var server = http.createServer(function (req, res) {   // 2 - creating server

  if (req.url == '/') { //check the URL of the current request
      // set response header;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      console.log("Incoming Req")
      var body = "";
       req.on('data', function (chunk) {
         body += chunk;
       });
       req.on('end', function () {
         console.log('POSTed: ' + body);
         fs.writeFile('data.json', body,  function (err) {
          if (err) throw err;

        });
         res.writeHead(200);
         res.end(body);
       });
  }

});

console.log('Node.js web server at port 80 is running..')
server.listen(80, "0.0.0.0"); //3 - listen for any incoming requests
