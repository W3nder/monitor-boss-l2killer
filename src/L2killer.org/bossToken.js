const {
  parse,
  addHours,
  format,
  differenceInMinutes
} = require("date-fns");

require("date-fns/locale/pt-BR");

const RaidBossList = [
  ["Amber", 36],
  ["Anakim", 36],
  ["Antaras", 120],
  ["Baium", 72],
  ["Bandit Leader Barda", 42],
  ["Betrayer Of Urutu Freki", 36],
  ["Bloody Priest Rudelto", 36],
  ["Carnage Lord Gato", 168],
  ["Demonic Agent Falston", 36],
  ["Shax The Death Lord", 7],
  ["Flamestone Golem", 168],
  ["Gargoyle Lord Sirocco", 36],
  ["Ghost Of Peasant Leader", 24],
  ["Harit Tutelar Garangky", 36],
  ["Ketra Hero Hekaton", 24],
  ["Lilith", 48],
  ["Malex Herald Of Dagoniel", 36],
  ["Queen Ant", 36],
  ["Queens Nobel Leader", 36],
  ["Roaring Seer Kastor", 40],
  ["Valakas", 264],
  ["Varka Hero Shadith", 36],
  ["Zaken", 60],
  ["Retreat Spider Cletu", 2],
  ["Fiercetiger King Angel", 46],
  ["Furious Thieles", 24],
  ["Ketra Chief Brakki", 24],
  ["Ketra Commander Tayr", 24],
  ["Turek Mercenary Boss", 7],
  ["Varka Chief Horuth", 36],
  ["Varka Commnder Mos", 36],
];

module.exports = class {
  constructor($list) {
    return this.bigBoss($list);
  }

  async bigBoss(list) {

    const raidBoss = list
    .filter((elem) => {
        return RaidBossList.filter((e) => e[0] === elem[0]).map(
            (a) => a[0] === elem[0]
        )[0];
    })
    .map((boss) => {
        if (boss[1] === "Morto") {
            const dateSplit = boss[2].split("-");
            const dateParser = `${dateSplit[0].trim()} ${dateSplit[1].trim()}`;

            const date = parse(dateParser, "dd/MM/yyyy HH:mm:ss", new Date());
            const time = RaidBossList.filter((e) => e[0] === boss[0]).map(
                (a) => a[1]
            )[0];

            const addtime = format(addHours(date, time), 'dd/MM/yyyy HH:mm');

            return [...boss, addtime, differenceInMinutes(parse(addtime, 'dd/MM/yyyy HH:mm', new Date()), new Date())] ;
        }
        return [...boss, "GOGO VIVO!", ""];
    });

    const bossIlive = raidBoss.filter((elem, i) => {
      return elem[3] === "GOGO VIVO!";
    });

    const bossDead = raidBoss
      .filter((elem, i) => {
        return elem[3] !== "GOGO VIVO!";
      })
      .sort((a, b) => {
        var dateA = parse(a[3], "dd/MM/yyyy HH:mm:ss", new Date());
        var dateB = parse(b[3], "dd/MM/yyyy HH:mm:ss", new Date());
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
      });

    let bossKiller = [];

    [...bossIlive, ...bossDead].forEach((boss) => {
      bossKiller.push({
          nome: boss[0], 
          status: boss[1],
          dtMorte: boss[2],
          dtSpawn: boss[3],
          minutos: boss[4]
      });
    });

    return bossKiller;
  }
};
