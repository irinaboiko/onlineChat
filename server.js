const WebSocket = require("ws");
const PORT = process.env.PORT || 5000;
const http = require("http");
const { response, request } = require("express");

const server = http.createServer();
server.listen(PORT, () => console.log(`Listening on ${PORT}`));

const webSocketServer = new WebSocket.Server(
  {
    port: server,
    Connection: "Upgrade",
    Upgrade: "websocket",
  },
  () => console.log(`Websocket started on port ${PORT}`)
);

webSocketServer.on("connection", (socket) => {
  socket.on("message", function (message) {
    message = JSON.parse(message);

    webSocketServer.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  });
});
