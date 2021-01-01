const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);

app.options('*', cors())

const io = require('socket.io')(server, {
  cors: {
    origin: "https://boss.unk.tools",
    methods: ["GET", "POST"]
  }
});

const port = process.env.PORT || 4001;

const index = require("./routes/index");

const request = require("./L2killer.org/request");
const listBoss = require("./L2killer.org/listBoss");
const bossToken = require("./L2killer.org/bossToken");


app.use(index);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 2000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});


const getApiAndEmit = (socket) => {
  const buscar = new request();
  buscar.boss().then(async (boss) => {
    const bt = await new bossToken(listBoss(boss[0]));

    let bossList = []

    bt.forEach(element => {
      bossList.push(element)
    });
    socket.emit('addNewMessage',bt)

  });
};

server.listen(port, () => console.log(`Listening on port ${port}`));
