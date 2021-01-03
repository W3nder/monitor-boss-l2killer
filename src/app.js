const express = require("express");
const http = require("http");
const cors = require("cors");
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));


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

cron.schedule('*/15 * * * * *', () => {

  const buscar = new request();

  buscar.boss().then(async (boss) => {
    const bt = await new bossToken(listBoss(boss[0]));

    let bossList = []

    bt.forEach(element => {
      bossList.push(element)
    });

    if(bossList.length) {
      let data = JSON.stringify(bossList);
      fs.writeFileSync(process.cwd() + '/src/cache/boss.json', data);
    }
  });

  console.log('running a task every minute');
});

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 3000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});


const getApiAndEmit = (socket) => {
  console.log(__dirname)
  let rawdata = fs.readFileSync(process.cwd() + '/src/cache/boss.json');
  let raidboss = JSON.parse(rawdata);
  socket.emit('addNewMessage',raidboss)

  raidboss.forEach(bossLista => {
    console.log(bossLista)
   if(bossLista.status === 'Vivo') {
      socket.emit('notificar', bossLista)
   }
  })

};

server.listen(port, () => console.log(`Listening on port ${port}`));
