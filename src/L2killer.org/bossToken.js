const {
  parse,
  addHours,
  format,
  differenceInMinutes
} = require("date-fns");

require("date-fns/locale/pt-BR");

const RaidBossList = [
  ["Amber", 36, 'https://raidboss.unk.tools/npc/amber.jpg'],
  ["Anakim", 36, 'https://raidboss.unk.tools/npc/Mob_25286.jpg' ],
  ["Antaras", 120, 'https://raidboss.unk.tools/npc/antaras.jpg' ],
  ["Baium", 72, 'https://raidboss.unk.tools/npc/baium.jpg' ],
  ["Bandit Leader Barda", 42, 'https://raidboss.unk.tools/npc/450px-Mob_25434.jpg' ],
  ["Betrayer Of Urutu Freki", 36, 'https://raidboss.unk.tools/npc/264px-Betrayer_of_Urutu_Freki%2C_Screenshot.jpg' ],
  ["Bloody Priest Rudelto", 36, 'https://raidboss.unk.tools/npc/Bloody_Priest_Rudelto%2C_Screenshot.jpg' ],
  ["Carnage Lord Gato", 168, 'https://raidboss.unk.tools/npc/Carnage_Lord_Gato%2C_Screenshot.jpg' ],
  ["Demonic Agent Falston", 36, 'https://raidboss.unk.tools/npc/Mob_25322.jpg' ],
  ["Shax The Death Lord", 7, 'https://raidboss.unk.tools/npc/terr_mon_25282.jpg' ],
  ["Flamestone Golem", 168, 'https://raidboss.unk.tools/npc/410px-Mob_25431.jpg' ],
  ["Gargoyle Lord Sirocco", 36, 'https://raidboss.unk.tools/npc/478px-Mob_25354.jpg' ],
  ["Ghost Of Peasant Leader", 24, 'https://raidboss.unk.tools/npc/ghostboss.png' ],
  ["Harit Tutelar Garangky", 36, 'https://raidboss.unk.tools/npc/Mob_25463.jpg' ],
  ["Ketra Hero Hekaton", 24, 'https://raidboss.unk.tools/npc/ketra_hero_hekaton.jpg' ],
  ["Lilith", 48, 'https://raidboss.unk.tools/npc/506px-Mob_29336.jpg' ],
  ["Malex Herald Of Dagoniel", 36, 'https://raidboss.unk.tools/npc/terr_mon_25373.jpg' ],
  ["Queen Ant", 36, 'https://raidboss.unk.tools/npc/queen_ant.jpg' ],
  ["Queens Nobel Leader", 36, 'https://raidboss.unk.tools/npc/amber.jpg' ],
  ["Roaring Seer Kastor", 40, 'https://raidboss.unk.tools/npc/395px-Mob_25226.jpg' ],
  ["Valakas", 264, 'https://raidboss.unk.tools/npc/valakas.jpg' ],
  ["Varka Hero Shadith", 36, 'https://raidboss.unk.tools/npc/varka_hero_shadith.jpg' ],
  ["Zaken", 60, 'https://raidboss.unk.tools/npc/zaken.jpg' ],
  ["Retreat Spider Cletu", 2, 'https://raidboss.unk.tools/npc/Mob_25007.jpg' ],
  ["Fiercetiger King Angel", 46, 'https://raidboss.unk.tools/npc/631px-Mob_25125.jpg' ],
  ["Furious Thieles", 24, 'https://raidboss.unk.tools/npc/Mob_25010.jpg' ],
  ["Ketra Chief Brakki", 24, 'https://raidboss.unk.tools/npc/ketra_chief_brakki.jpg' ],
  ["Ketra Commander Tayr", 24, 'https://raidboss.unk.tools/npc/ketra_commander_tayr.jpg' ],
  ["Turek Mercenary Boss", 7, 'https://raidboss.unk.tools/npc/amber.jpg' ],
  ["Varka Chief Horuth", 36, 'https://raidboss.unk.tools/npc/varka_chief_horuth.jpg' ],
  ["Varka Commnder Mos", 36, 'https://raidboss.unk.tools/npc/varka_commnder_mos.jpg' ],
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

            const img = RaidBossList.filter((e) => e[0] === boss[0]).map(
              (a) => a[2]
          )[0];

            const addtime = format(addHours(date, time), 'dd/MM/yyyy HH:mm');

            return [...boss, img, addtime, differenceInMinutes(parse(addtime, 'dd/MM/yyyy HH:mm', new Date()), new Date())] ;
        }
        const img = RaidBossList.filter((e) => e[0] === boss[0]).map(
          (a) => a[2]
      )[0];

        return [...boss, img, "GOGO VIVO!", ""];
    });

    const bossIlive = raidBoss.filter((elem, i) => {
      return elem[4] === "GOGO VIVO!";
    });

    const bossDead = raidBoss
      .filter((elem, i) => {
        return elem[4] !== "GOGO VIVO!";
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
          dtMorte: boss[2].replace('-', ''),
          image: boss[3],
          dtSpawn: boss[4],
          minutos: boss[5],
          statusColor:  (boss[1] === 'Morto') ? 'red' : 'green'
      });
    });

    return bossKiller;
  }
};
