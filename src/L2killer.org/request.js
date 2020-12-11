const axios = require("axios");
const cheerio = require("cheerio");
const tabletojson = require("tabletojson").Tabletojson;

module.exports = class  {
  constructor() {
    this.url = "https://l2killer.org/?page=boss";
  }

  boss = async () => {
    const html = await this.pegarHtml();
    const chee = cheerio.load(html.data);
    let tableBoss
    chee("table").each(async (i, elem) => {
      if (i == 0) {
        tableBoss = tabletojson.convert(elem);
      }
    });

    return tableBoss
  };

  pegarHtml = async () => {
    try {
      return await axios.get(this.url, {
        headers: {
          referer: "https://l2killer.org/?page=download",
          "accept-language": "pt-BR",
        },
      });
    } catch (error) {
      console.log(`[ERRO] ${error}`);
    }
  };
}
