require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const cron = require("node-cron");
const fs = require("fs");

const app = express();
const server = http.createServer(app);

app.use(express.static("public"));

app.options("*", cors());

const io = require("socket.io")(server, {
  cors: {
    origin: process.env.APP_ORIGIN,
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 4001;

const index = require("./routes/index");

const listBoss = require("./lib/listBoss");
const bossToken = require("./lib/bossToken");
const bossTokenKiller = require("./services/index");

app.use(index);

const killer = new bossTokenKiller();

cron.schedule("*/2 * * * * *", async () => {
  const lista = await killer.boss();

  if (lista.length) {
    const bt = await new bossToken(listBoss(lista[0]));

    let bossList = [];

    bt.forEach((element) => {
      bossList.push(element);
    });

    if (bossList.length) {
      let data = JSON.stringify(bossList);
      fs.writeFileSync(process.cwd() + "/src/cache/boss.json", data);
    }
  }

  console.log("running a task every minute");
});

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }

  getList(socket, io);

  interval = setInterval(() => getApiAndEmit(socket, io), 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket, io) => {
  getList(socket, io);
};

const getList = (socket, io) => {
  let rawdata = fs.readFileSync(process.cwd() + "/src/cache/boss.json");
  let raidboss = JSON.parse(rawdata);

  raidboss.forEach((bossLista) => {
    if (bossLista.status === "Vivo") {
      io.emit("notificar", bossLista);
    }
  });

  io.emit("addNewMessage", raidboss);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
