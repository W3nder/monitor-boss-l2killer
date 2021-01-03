const axios = require("axios");
const cheerio = require("cheerio");
const tabletojson = require("tabletojson").Tabletojson;

module.exports = class  {
  constructor() {
    this.url = "https://l2killer.org/?page=boss";
  }

  boss = async () => {
    const html = await this.pegarHtml();
    //const chee =  cheerio.load(html.data);

    let tableBoss = tabletojson.convert(html.data);
    return tableBoss
  };

  pegarHtml = async () => {
    try {
      return await axios.get(this.url, {
        headers: {
          'authority': 'l2killer.org',
          'cache-control': 'max-age=0',
          'upgrade-insecure-requests': '1',
          'user-agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36 Edg/87.0.664.66',
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          'referer': 'https://l2killer.org/',
          'accept-language': 'pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
          'cookie': 'atualstudio_language=pt;'
      },
      });
    } catch (error) {
      console.log(`[ERRO] ${error}`);
    }
  };
}
