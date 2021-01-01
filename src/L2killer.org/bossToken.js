const {
  parse,
  addHours,
  format,
  differenceInMinutes
} = require("date-fns");

require("date-fns/locale/pt-BR");

const RaidBossList = [
  ["Amber", 36, 'https://www.l2infer.com/assets/images/npc/amber.jpg'],
  ["Anakim", 36, 'https://l2central.info/c/images/8/89/Mob_25286.jpg' ],
  ["Antaras", 120, 'https://www.l2infer.com/assets/images/npc/antaras.jpg' ],
  ["Baium", 72, 'https://www.l2infer.com/assets/images/npc/baium.jpg' ],
  ["Bandit Leader Barda", 42, 'https://l2central.info/c/images/thumb/9/99/Mob_25434.jpg/450px-Mob_25434.jpg' ],
  ["Betrayer Of Urutu Freki", 36, 'https://linedia.ru/w/images/thumb/1/18/Betrayer_of_Urutu_Freki%2C_Screenshot.jpg/264px-Betrayer_of_Urutu_Freki%2C_Screenshot.jpg' ],
  ["Bloody Priest Rudelto", 36, 'https://linedia.ru/w/images/6/60/Bloody_Priest_Rudelto%2C_Screenshot.jpg' ],
  ["Carnage Lord Gato", 168, 'https://linedia.ru/w/images/c/c6/Carnage_Lord_Gato%2C_Screenshot.jpg' ],
  ["Demonic Agent Falston", 36, 'https://l2central.info/w/images/7/7a/Mob_25322.jpg' ],
  ["Shax The Death Lord", 7, 'http://www.l2portal.com/Images/Npcs/npc_signed/terr_mon_25282.jpg' ],
  ["Flamestone Golem", 168, 'https://l2central.info/w/images/thumb/9/94/Mob_25431.jpg/410px-Mob_25431.jpg' ],
  ["Gargoyle Lord Sirocco", 36, 'https://l2central.info/w/images/thumb/e/e7/Mob_25354.jpg/478px-Mob_25354.jpg' ],
  ["Ghost Of Peasant Leader", 24, 'https://www.l2cr.com/imgl2cr/ghostboss.png' ],
  ["Harit Tutelar Garangky", 36, 'https://l2central.info/w/images/e/e3/Mob_25463.jpg' ],
  ["Ketra Hero Hekaton", 24, 'https://www.l2infer.com/assets/images/npc/ketra_hero_hekaton.jpg' ],
  ["Lilith", 48, 'https://l2central.info/w/images/thumb/b/b1/Mob_29336.jpg/506px-Mob_29336.jpg' ],
  ["Malex Herald Of Dagoniel", 36, 'http://www.l2portal.com/Images/Npcs/npc_signed/terr_mon_25373.jpg' ],
  ["Queen Ant", 36, 'https://www.l2infer.com/assets/images/npc/queen_ant.jpg' ],
  ["Queens Nobel Leader", 36, 'https://www.l2infer.com/assets/images/npc/amber.jpg' ],
  ["Roaring Seer Kastor", 40, 'https://l2central.info/w/images/thumb/8/86/Mob_25226.jpg/395px-Mob_25226.jpg' ],
  ["Valakas", 264, 'https://www.l2infer.com/assets/images/npc/valakas.jpg' ],
  ["Varka Hero Shadith", 36, 'https://www.l2infer.com/assets/images/npc/varka_hero_shadith.jpg' ],
  ["Zaken", 60, 'https://www.l2infer.com/assets/images/npc/zaken.jpg' ],
  ["Retreat Spider Cletu", 2, 'https://l2central.info/c/images/8/8c/Mob_25007.jpg' ],
  ["Fiercetiger King Angel", 46, 'https://l2central.info/w/images/thumb/b/ba/Mob_25125.jpg/631px-Mob_25125.jpg' ],
  ["Furious Thieles", 24, 'https://l2central.info/w/images/a/ad/Mob_25010.jpg' ],
  ["Ketra Chief Brakki", 24, 'https://www.l2infer.com/assets/images/npc/ketra_chief_brakki.jpg' ],
  ["Ketra Commander Tayr", 24, 'https://www.l2infer.com/assets/images/npc/ketra_commander_tayr.jpg' ],
  ["Turek Mercenary Boss", 7, 'https://www.l2infer.com/assets/images/npc/amber.jpg' ],
  ["Varka Chief Horuth", 36, 'https://www.l2infer.com/assets/images/npc/varka_chief_horuth.jpg' ],
  ["Varka Commnder Mos", 36, 'https://www.l2infer.com/assets/images/npc/varka_commnder_mos.jpg' ],
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
