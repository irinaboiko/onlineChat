const WebSocket = require("ws");
const http = require("http");
const path = require("path");
const express = require("express");
const { Server } = require("ws");

const PORT = process.env.PORT || 5000;

/*const server = http.createServer();
server.use(express.static(path.resolve(__dirname, "../client/build")));
server.listen(PORT, () => console.log(`Listening on ${PORT}`));*/

const server = express()
  .use((req, res) => res.sendFile("../client/build", { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

/*const webSocketServer = new WebSocket.Server(
  {
    port: server,
  },
  () => console.log(`Websocket started on port ${PORT}`)
);*/

const webSocketServer = new Server({ server }, () =>
  console.log(`Websocket started on port ${PORT}`)
);

webSocketServer.on("connection", (socket) => {
  socket.on("message", function (message) {
    message = JSON.parse(message);

    webSocketServer.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  });
});
