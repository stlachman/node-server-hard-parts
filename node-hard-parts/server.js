const http = require("http");
const fs = require("fs");

function doOnRequest(request, response) {
  // Send back a message saying "Welcome to Twitter"
  // response.end("Welcome to Twitter");
  if (request.method === "GET" && request.url === "/") {
    const page = fs.readFileSync("index.html");
    response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    response.write(page);
    response.end();
  } else if (request.method === "GET" && request.url === "/style.css") {
    const css = fs.readFileSync("style.css");
    response.writeHead(200, { "Content-Type": "text/css; charset=UTF-8" });
    response.write(css);
    response.end();
  } else if (request.method === "POST" && request.url === "/sayHi") {
    try {
      fs.appendFileSync("hi_log.txt", "Somebody said hi.\n");
      response.end("hi back to you!");
    } catch (err) {
      response.end("error sending message");
    }
  } else if (request.method === "POST" && request.url === "/greeting") {
    // accumulate the request body in a series of chunks
    let body = [];
    request
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        if (body === "hello") {
          fs.appendFileSync("hi_log.txt", body);
          response.end("hello there!");
        } else if (body === "what's up") {
          fs.appendFileSync("hi_log.txt", body);
          response.end("the sky");
        }
      });
  } else {
    response.writeHead(404);
    response.end("Error: Not Found");
  }
}

const server = http.createServer(doOnRequest);

server.listen(3000);
