var fs = require('fs');
var puts = require('sys').puts;

fs.watchFile('boom.txt', function() {
  puts ('file changed!');
});