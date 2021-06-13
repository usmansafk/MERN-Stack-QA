const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Helllooooo `);
});

app.listen(4494);

/*

app.get(route, callback)
-- This function tells what to do when a get request at the given route is called.
--- The callback function has 2 parameters, request(req) and response(res).
--- The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.
--- Similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.

res.send()
-- This function takes an object as input and it sends this to the requesting client.
-- Here we are sending the string "Hello World!".

app.listen(port, [host], [backlog], [callback]])
-- This function binds and listens for connections on the specified host and port.
-- Port is the only required parameter here.
*/
