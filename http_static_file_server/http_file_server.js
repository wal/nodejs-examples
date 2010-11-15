var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var sys = require('sys');

http.createServer(function(req, resp) {

  var req_path = url.parse(req.url).pathname;

  if (req_path == '/'){
    req_path = 'index.html';
  }

  var file_name = path.join(process.cwd(), req_path);

  path.exists(file_name, function(exists) {

    if (!exists) {
      resp.writeHead(404);
      resp.write("404 NOT FOUND!");
      resp.end();
      return;
    }

    fs.readFile(file_name, "binary", function(err, file) {
      if (err) {
        console.log(err);
        resp.writeHead(500);
        resp.write("DAMN!");
        resp.end();
        return;
      }

      resp.writeHead(200);
      resp.write(file, "binary");
      resp.end();
    });
  });
}).listen(9090);

sys.puts("Server Started on http://localhost:9090");