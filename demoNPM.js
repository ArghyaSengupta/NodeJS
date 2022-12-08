var http = require('http');
var uc = require('upper-case');// converts into upper case : related to string: 3rd party module
var lc = require('lower-case');// converts into lower case 3rd party module
http.createServer(function (req, res) // req: request,(sent) res: response(rcvd)
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.write(lc.lowerCase("Hello World!"));
  res.end();
}).listen(8080);