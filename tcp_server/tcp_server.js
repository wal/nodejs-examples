net = require('net');

var s = net.createServer();

s.addListener('connection', function(c) {
  c.end('Hi from the TCP server'); // Send bytes and close
});

s.listen(9090);
console.log('Listening on localhost:9090');