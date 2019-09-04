var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;

  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    if (globalCounter[property] ) {
      globalCounter[property]++;
    } else {
      globalCounter[property] = 1;
    }
    response.statusCode = 200;
    response.end();
    // YOUR CODE HERE
  } else if (request.method === 'GET') {
    if (globalCounter[property] ) {
      response.write(JSON.stringify(globalCounter[property]));
      response.end();
    } else {
      response.end();
    }
    // YOUR CODE HERE
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
