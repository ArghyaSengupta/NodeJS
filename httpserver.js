const http = require("http");

//creating a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ name: "me", message: "i am working" }));
  res.end();
});
//listening at port 3000
server.listen(3000);
