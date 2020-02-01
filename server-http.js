var http = require("http");

var server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  if (request.url === "/index") {
    response.end("fala Zeze, bom dia cara");
  }

  if (request.url === "/contato") {
    response.end("zeze@gmail.com");
  } else {
    response.end("Not Found");
  }
});

server.listen(1337, "127.0.0.1");
console.log("Server is running at http://127.0.0.1:1337/index");
