const {
  parse,
  addHours,
  format,
  differenceInMinutes
} = require("date-fns");

require("date-fns/locale/pt-BR");


const bossUp = [
  {
    nome: 'Bloody Priest Rudelto',
    localizacao: '8 OPC GATO GIRAN',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/Bloody_Priest_Rudelto%2C_Screenshot.jpg'
  },
  {
    nome: 'Fiercetiger King Angel',
    localizacao: 'GK GIRAN - BOSS INSLAND (Ilha)',
    tempo: 36,
    avatar: process.env.APP_URL + 'npc/631px-Mob_25125.jpg'
  },
  {
    nome: 'Langk Matriarch Rashkos',
    localizacao: '8 OPC CAT HEINE',
    tempo: 96,
    avatar: process.env.APP_URL + 'npc/default.png'
  },
  {
    nome: 'Vuku Witchdr Gharmash',
    localizacao: 'Catacomb of the Forbidden Path',
    tempo: 36,
    avatar: process.env.APP_URL + 'npc/default.png'
  },
  {
    nome: 'Carnage Lord Gato',
    localizacao: '4 OPC CAT GIRAN (Castell Giran )',
    tempo: 168,
    avatar: process.env.APP_URL + 'npc/Carnage_Lord_Gato%2C_Screenshot.jpg'
  },
  {
    nome: 'Roaring Seer Kastor',
    localizacao: 'GK GIRAN - BOSS INSLAND',
    tempo: 42,
    avatar: process.env.APP_URL + 'npc/395px-Mob_25226.jpg'
  },
  {
    nome: 'Shax The Death Lord',
    localizacao: 'SALA SECRETA (Red Paper)',
    tempo: 7,
    avatar: process.env.APP_URL + 'npc/terr_mon_25282.jpg'
  },
  {
    nome: 'Ketra Hero Hekaton',
    localizacao: '2 OPC GATO GODDARD/ KETRA ORC OUTPOUST (GK NORMAL)',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/ketra_hero_hekaton.jpg'
  },
  {
    nome: 'Ketra Commander Tayr',
    localizacao: 'Ultima 12 OPC GATO GODDARD / KETRA ORC VILLAGE',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/ketra_commander_tayr.jpg'
  },
  {
    nome: 'Ketra Chief Brakki',
    localizacao: 'Ultima 12 OPC GATO GODDARD / KETRA ORC VILLAGE',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/ketra_chief_brakki.jpg'
  },
  {
    nome: 'Varka Hero Shadith',
    localizacao: '11 GATO GODDARD - VARKA SILENOS VILLAGE',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/varka_hero_shadith.jpg'
  },
  {
    nome: 'Varka Commnder Mos',
    localizacao: '11 GATO GODDARD - VARKA SILENOS VILLAGE',
    tempo: 36,
    avatar: process.env.APP_URL + 'npc/varka_commnder_mos.jpg'
  },
  {
    nome: 'Varka Chief Horuth',
    localizacao: '11 GATO GODDARD - VARKA SILENOS VILLAGE',
    tempo: 36,
    avatar: process.env.APP_URL + 'npc/varka_chief_horuth.jpg'
  },
  {
    nome: 'Amber',
    localizacao: '8 GATO GODDARD - HALL OF FLAMES',
    tempo: 36,
    avatar: process.env.APP_URL + 'npc/amber.jpg'
  },
  {
    nome: 'Demonic Agent Falston',
    localizacao: '4 GATO RUNE /VALLEY OF SANTS (GK NORMAL)',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/Mob_25322.jpg'
  },
  {
    nome: 'Gargoyle Lord Sirocco',
    localizacao: '4 OPC GATO DION/15 OPC GATO DE GLUDIO',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/478px-Mob_25354.jpg'
  },
  {
    nome: 'Malex Herald Of Dagoniel',
    localizacao: '3 OPC ELVEN VILLAGE',
    tempo: 36,
    avatar: process.env.APP_URL + 'npc/terr_mon_25373.jpg'
  },
  {
    nome: 'Queens Nobel Leader',
    localizacao: '8 OPC DE DION',
    tempo: 36,
    avatar: process.env.APP_URL + 'npc/amber.jpg'
  },
  {
    nome: 'Faf Herald Lokness',
    localizacao: '8 OPC GATO HEINE',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/Lokness.jpg'
  },
  {
    nome: 'Bandit Leader Barda',
    localizacao: 'GK GIRAN - BOSS INSLAND (Ilha)',
    tempo: 42,
    avatar: process.env.APP_URL + 'npc/450px-Mob_25434.jpg'
  },
  {
    nome: 'Harit Tutelar Garangky',
    localizacao: '4/5 OPC GATO HUNTERS VILLAGE (ADEN - SILENT VALLEY)',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/Mob_25463.jpg'
  },
  {
    nome: 'Queen Ant',
    localizacao: '4 OPC GATO DION/15 OPC GATO DE GLUDIO',
    tempo: 22,
    avatar: process.env.APP_URL + 'npc/queen_ant.jpg'
  },
  {
    nome: 'Antaras',
    localizacao: '11 OPC GATO GIRAN',
    tempo: 120,
    avatar: process.env.APP_URL + 'npc/antaras.jpg'
  },
  {
    nome: 'Baium',
    localizacao: 'SUBIDA DAS ESCADAS - TOWER 13',
    tempo: 48,
    avatar: process.env.APP_URL + 'npc/baium.jpg'
  },
  {
    nome: 'Zaken',
    localizacao: '6 OPC GATO GIRAN',
    tempo: 60,
    avatar: process.env.APP_URL + 'npc/zaken.jpg'
  },
  {
    nome: 'Valakas',
    localizacao: '6 OPC GATO GODDARD',
    tempo: 264,
    avatar: process.env.APP_URL + 'npc/valakas.jpg'
  },
  {
    nome: 'Anakim',
    localizacao: 'AREA PVP (Black Paper)',
    tempo: 36,
    avatar: process.env.APP_URL + 'npc/Mob_25286.jpg'
  },
  {
    nome: 'Lilith',
    localizacao: 'AREA PVP (Black Paper)',
    tempo: 36,
    avatar: process.env.APP_URL + 'npc/506px-Mob_29336.jpg'
  },
  {
    nome: 'Turek Mercenary Boss',
    localizacao: '3/4/5 OPC GATO HEINE/ SANTS NECROPOLIS',
    tempo: 7,
    avatar: process.env.APP_URL + 'npc/amber.jpg'
  },
  {
    nome: 'Retreat Spider Cletu',
    localizacao: 'SANTS NECROPOLIS/2/3/4/ OPC GATO HEINE/',
    tempo: 2,
    avatar: process.env.APP_URL + 'npc/Mob_25007.jpg'
  },
  {
    nome: 'Furious Thieles',
    localizacao: '2/3/4/5 OPC GATO HEINE/SANTS NECROPOLIS',
    tempo: 24,
    avatar: process.env.APP_URL + 'npc/Mob_25010.jpg'
  },
  {
    nome: 'Ghost Of Peasant Leader',
    localizacao: '4/5 OPC GATO HEINE/SANTS NECROPOLIS',
    tempo: 24,
    avatar: process.env.APP_URL + 'npc/ghostboss.png'
  },
  {
    nome: 'Betrayer Of Urutu Freki',
    localizacao: '2 GATO ORC VILLAGE',
    tempo: 12,
    avatar: process.env.APP_URL + 'npc/264px-Betrayer_of_Urutu_Freki%2C_Screenshot.jpg'
  },
  {
    nome: 'Flamestone Golem',
    localizacao: 'CASTEL ADEN',
    tempo: 168,
    avatar: process.env.APP_URL + 'npc/410px-Mob_25431.jpg'
  }
]


module.exports = class {
  constructor($list) {
    return this.bigBoss($list);
  }

  async bigBoss(list) {

    const raidBoss = list
    .filter((elem) => {
        return bossUp.filter((e) => e.nome === elem[0]).map(
            (a) => a.nome === elem[0]
        )[0];
    })
    .map((boss) => {
        if (boss[1] === "Morto") {
            const dateSplit = boss[2].split("-");

            const dateParser = `${dateSplit[0].trim()} ${dateSplit[1].trim()}`;

            const date = parse(dateParser, "dd/MM/yyyy HH:mm:ss", new Date());
            const time = bossUp.filter((e) => e.nome === boss[0]).map(
                (a) => a.tempo
            )[0];

            const img = bossUp.filter((e) => e.nome === boss[0]).map(
              (a) => a.avatar
          )[0];

            const addtime = format(addHours(date, time), 'dd/MM/yyyy HH:mm');

            return [...boss, img, addtime, differenceInMinutes(parse(addtime, 'dd/MM/yyyy HH:mm', new Date()), new Date())] ;
        }
        const img = bossUp.filter((e) => e.nome === boss[0]).map(
          (a) => a.avatar
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
