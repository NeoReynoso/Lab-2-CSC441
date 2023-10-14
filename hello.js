
const http = require('http');

// HTTP server to respond with simple message to all requests
const server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end('<h1>Hello, world!</h1>');
});


const port = 8080;
server.listen(port);


console.log("Server running at port=" + port);