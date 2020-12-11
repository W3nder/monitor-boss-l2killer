const express = require("express");
const app = express();
const request = require("./L2killer.org/request");
const listBoss = require("./L2killer.org/listBoss");
const bossToken = require("./L2killer.org/bossToken");

const port = 3000;

app.get("/", (req, res) => {
  const buscar = new request();
  buscar.boss().then(async (boss) => {
    const bt = await new bossToken(listBoss(boss[0]));
    res.json(bt);
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
