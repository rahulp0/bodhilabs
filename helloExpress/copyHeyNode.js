var http = require("http");

http.createServer(function(request,response){
  response.writeHead(800,{"Content-type":"text/plain"});
  response.end("Hey\n");
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000");
