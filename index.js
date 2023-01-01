const http = require('http');


const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hai Team ,i am coming from localhost:3000 ');
});

server.listen(port , () => {
  console.log(`Server running :${port}/`);
});