var http = require('http');//http module
//var https = require('https');//https module
var url = require('url');//url module
var fs = require('fs');//file stream module for handling large number of data

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);//parsing/registering the url for a request URL
  var filename = "." + q.pathname;//. is used for moving to the location: ./abcd.txt
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);//to run the http server module