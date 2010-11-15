var fs = require('fs');
var puts = require('sys').puts;

fs.readFile('boom.txt', function(err, data) {
  if (err) throw err;
  puts (data);
});