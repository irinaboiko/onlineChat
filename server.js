const { Server } = require("ws");
const PORT = process.env.PORT || 5000;
const http = require("http");
//const INDEX = "/client/src/components/Chat/containers/ChatContainer";

/*const server = express()
  //.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));*/

const server = http.createServer();
server.listen(PORT, () => console.log(`Listening on ${PORT}`));

const webSocketServer = new Server(
  {
    server,
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
