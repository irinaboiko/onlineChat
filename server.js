const webSocket = require("ws");

const PORT = process.env.PORT || 5000;

const webSocketServer = new webSocket.Server(
  {
    port: PORT,
  },
  () => console.log(`Server started on port ${PORT}`)
);

webSocketServer.on("connection", function connection(socket) {
  socket.on("message", function (message) {
    message = JSON.parse(message);

    webSocketServer.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  });
});
