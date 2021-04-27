const request = require("./request");
const listBoss = require(".//listBoss");
const bossToken = require(".//bossToken");

const buscar = new request();

buscar.boss().then(async (boss) => {
  const bt = await new bossToken(listBoss(boss[0]));

  console.log(bt)
})