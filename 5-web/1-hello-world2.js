const http = require('http');

// same as 1-hello-world.js

const requestListener = (req, res) => {
  res.end('Hello World\n');
};

const server = http.createServer(requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
