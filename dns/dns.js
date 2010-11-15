var dns = require('dns');

dns.resolve4('walmcconnell.com', function(err, addr, ttl, cname) {
  console.log(addr);
});

