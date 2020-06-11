const http = require('http');
const mysql = require('mysql');
const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send("this is the home page");
});
app.listen(8901);
consoleg.log("Listening on port 8901");
/*
var server = http.createServer(function (req, res) {   // 2 - creating server

  //send to 98.179.61.174:8901/webhookdata
  if (req.url == '/webhookdata') { //check the URL of the current request
      // set response header
      console.log(req);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      console.log("Incoming Req")

      //set response content
      res.write('<html><body><p>This is home Page.</p></body></html>');
      res.end();

  }

});

console.log('Node.js web server at port 8901 is running..')
server.listen(8901); //3 - listen for any incoming requests*/
