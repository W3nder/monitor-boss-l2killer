const axios = require("axios");
const table = require("tabletojson").Tabletojson;

module.exports = class  {
  constructor() {
    this.url = "https://www.l2killer.org/?page=boss";
  }

  boss = async () => {
    try {
      const { data } = await axios.get(this.url, {
        headers: {
          cookie: "atualstudio_language=pt;",
        },
      });
      return table.convert(data)
      
    } catch (error) {
      return false
    }
  };
}
