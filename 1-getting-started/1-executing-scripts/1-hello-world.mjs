// const http = require('http');

// use ES module for .mjs ECMAScript module
import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
