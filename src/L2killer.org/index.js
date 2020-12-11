const request = require("./request");
const listBoss = require("./listBoss");
const bossToken = require("./bossToken");

const buscar = new request();
buscar.boss().then(async res => {

  const array = await new bossToken(listBoss(res[0]));
  console.log(array);

})