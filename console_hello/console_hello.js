var sys = require('sys');

setTimeout(function() {
  sys.puts("World!");
}, 2000);
sys.puts("Hello");

// Waits 2 seconds and then prints World and exit's