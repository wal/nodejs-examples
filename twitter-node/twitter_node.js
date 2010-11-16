if (process.argv.length != 5) {
  console.log ("usage : node twitter_node.js USERNAME PASSWORD SEARCH-STRING");
  return;
}

var username = process.argv[2];
var password = process.argv[3];
var search_term = process.argv[4];


console.log("Search for " + search_term);

var TwitterNode = require('./twitter-node').TwitterNode;
var sys = require('sys');

var twit = new TwitterNode({
  user: username,
  password: password
});

twit.track(search_term);

twit.addListener('error', function(error) {
  sys.puts(error);
});

twit.addListener('tweet', function(tweet) {
 sys.puts("@" + tweet.user.screen_name + ": " + tweet.text);
});

twit.stream();



