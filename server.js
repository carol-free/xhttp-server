// server.js
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('OK\n');
});
server.listen(process.env.PORT || 8080);
