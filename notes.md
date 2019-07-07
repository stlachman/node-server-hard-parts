C++ has many features to allow it to interact with the OS directly.
JavaScript has to work with C++ to control computer features
JS -> Node -> Computer feature (network, file system)

JS does 2 things by itself: Saving and using data

Global Variable Environment (Memory)

Thread of execution

```js
const server = http.createServer();
server.listen(80);
```

Inbound web request -> run code to send back message
if inbound message -> send back data
But when?
Node auto-runs the code (function) for us when a request arrives from a user

```js
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
  functionsToSetOutgoingData.end("Welcome to Twitter!");
}
const server = http.createServer();
server.listen(80);
```

1. We don't know when an inbound request will arrive so we rely on Node to trigger the JS code
2. JS is single threaded and synchronous so all of the slow work (e.g. interacting with a database) is done by Node in the background

Messages are sent in HTTP format - protocl for browser-server interaction

HTTP Message: Request line (url, method), header, body (optional)

Our return message is also in HTTP format
