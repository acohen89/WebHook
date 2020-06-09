const http = require('http');
const mysql = require('mysql');

var server = http.createServer(function (req, res) {   // 2 - creating server

  if (req.url == '/') { //check the URL of the current request

      // set response header
      res.writeHead(200, { 'Content-Type': 'text/html' });
      console.log("Incoming Req")
      // set response content
      res.write('<html><body><p>This is home Page.</p></body></html>');
      res.end();

  }

});
server.listen(8901); //3 - listen for any incoming requests
console.log('Node.js web server at port 8901 is running..')

/*
var con = mysql.createConnection({ // Establishes Connection To MySql Database
host: "157.230.222.102",
user: "dsypwqmujp",
password: "n52XUjDsVT"
});
con.connect(function(err) {
  if (err) throw err;
}); */
