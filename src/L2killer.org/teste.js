require('dotenv').config()

const boss =  [
  ["Bloody Priest Rudelto","8 OPC GATO GIRAN","12Horas  A 21Horas QUALQUER MOMENTO", process.env.APP_URL + 'npc/Bloody_Priest_Rudelto%2C_Screenshot.jpg'  ],
  ["Fiercetiger King Angel","GK GIRAN - BOSS INSLAND (Ilha)    ","36H (1Dias e 12 Horas) A QUALQUER MOMENTO"  ],
  ["Langk Matriarch Rashkos","8 OPC CAT HEINE  ","96 Horas ( 4 Dias )"  ],
  ["Vuku Witchdr Gharmash","Catacomb of the Forbidden Path  ","36H (1Dias e 12 Horas) "  ],
  ["Carnage Lord Gato ","4 OPC CAT GIRAN (Castell Giran )","168 Horas (7 Dias)"  ],
  ["Roaring Seer Kastor","GK GIRAN - BOSS INSLAND ","42Horas (1 Dias e 18) Horas A QUALQUER MOMENTO"  ],
  ["Shax The Death Lord","SALA SECRETA (Red Paper)    ","7Horas A 8Horas"  ],
  ["Ketra Hero Hekaton","2 OPC GATO GODDARD/ KETRA ORC OUTPOUST (GK NORMAL)    ","12Horas A 21Horas QUALQUER MOMENTO"  ],
  ["Ketra Commander Tayr","Ultima 12 OPC GATO GODDARD / KETRA ORC VILLAGE","12Horas A 21Horas QUALQUER MOMENTO"  ],
  ["Ketra Chief Brakki ","Ultima 12 OPC GATO GODDARD / KETRA ORC VILLAGE","12Horas A 21Horas QUALQUER MOMENTO"  ],
  ["Varka Hero Shadith","11 GATO GODDARD - VARKA SILENOS VILLAGE","12Horas A 21Horas QUALQUER MOMENTO"  ],
  ["Varka Commnder Mos","11 GATO GODDARD - VARKA SILENOS VILLAGE","12Horas A 21Horas QUALQUER MOMENTO"  ],
  ["Varka Chief Horuth","11 GATO GODDARD - VARKA SILENOS VILLAGE","12Horas A 21Horas QUALQUER MOMENTO"  ],
  ["Amber","8 GATO GODDARD - HALL OF FLAMES    ","36 Horas (1 Dias e 12 Horas)", process.env.APP_URL + 'npc/amber.jpg'  ],
  ["Demonic Agent Falston"," 4 GATO RUNE /VALLEY OF SANTS (GK NORMAL)","12Horas  A 21Horas QUALQUER MOMENTO"  ],
  ["Gargoyle Lord Sirocco","4 OPC GATO DION/15 OPC GATO DE GLUDIO    ","12Horas  A 21Horas QUALQUER MOMENTO"  ],
  ["Malex Herald Of Dagoniel","3 OPC ELVEN VILLAGE    ","36 Horas (1 Dias e 12 Horas)"  ],
  ["Queens Nobel Leader","8 OPC DE DION    ","12Horas A 21 QUALQUER MOMENTO"  ],
  ["Faf Herald Lokness","8 OPC GATO HEINE","12Horas A 21 QUALQUER MOMENTO"  ],
  ["Bandit Leader Barda","GK GIRAN - BOSS INSLAND (Ilha)    ","42Horas (1 Dias e 18 Horas) A QUALQUER MOMENTO"  ],
  ["Harit Tutelar Garangky","4/5 OPC GATO HUNTERS VILLAGE (ADEN - SILENT VALLEY)    ","12Horas A 21 QUALQUER MOMENTO"  ],
  ["Queen Ant","4 OPC GATO DION/15 OPC GATO DE GLUDIO    ","22Horas A 26Horas "  ],
  ["Antaras","11 OPC GATO GIRAN","4Dias A QUALQUER MOMENTO (9Horas MAX)"  ],
  ["Baium ","SUBIDA DAS ESCADAS - TOWER 13","48Horas (2Dias) A QUALQUER MOMENTO (9H MAX)"  ],
  ["Zaken","6 OPC GATO GIRAN    ","36Horas A 48Horas"  ],
  ["Valakas","6 OPC GATO GODDARD","264 Horas (11 Dias)"  ],
  ["Anakim","AREA PVP (Black Paper)    ","36H A QUALQUER MOMENTO"  ],
  ["Lilith","AREA PVP (Black Paper)    ","36H A QUALQUER MOMENTO"  ],
  ["Turek Mercenary Boss","3/4/5 OPC GATO HEINE/ SANTS NECROPOLIS    ","7Horas"  ],
  ["Retreat Spider Cletu","SANTS NECROPOLIS/2/3/4/ OPC GATO HEINE/    ","2 Horas"  ],
  ["Furious Thieles","2/3/4/5 OPC GATO HEINE/SANTS NECROPOLIS ","24 Horas"  ],
  ["Ghost Of Peasant Leader","4/5 OPC GATO HEINE/SANTS NECROPOLIS    ","24 Horas"  ],
  ["Betrayer Of Urutu Freki","2 GATO ORC VILLAGE ","12Horas A 21Horas QUALQUER MOMENTO"  ],
  ["Flamestone Golem","CASTEL ADEN ","7 DIAS "  ]
]

const bossOld = [
  ["Amber", 36, process.env.APP_URL + 'npc/amber.jpg'],
  ["Faf Herald Lokness", 12, process.env.APP_URL + 'npc/Lokness.jpg'],
  ["Anakim", 36, process.env.APP_URL + 'npc/Mob_25286.jpg' ],
  ["Antaras", 120, process.env.APP_URL + 'npc/antaras.jpg' ],
  ["Baium", 72, process.env.APP_URL + 'npc/baium.jpg' ],
  ["Bandit Leader Barda", 42, process.env.APP_URL + 'npc/450px-Mob_25434.jpg' ],
  ["Betrayer Of Urutu Freki", 36, process.env.APP_URL + 'npc/264px-Betrayer_of_Urutu_Freki%2C_Screenshot.jpg' ],
  ["Bloody Priest Rudelto", 36, process.env.APP_URL + 'npc/Bloody_Priest_Rudelto%2C_Screenshot.jpg' ],
  ["Carnage Lord Gato", 168, process.env.APP_URL + 'npc/Carnage_Lord_Gato%2C_Screenshot.jpg' ],
  ["Demonic Agent Falston", 36, process.env.APP_URL + 'npc/Mob_25322.jpg' ],
  ["Shax The Death Lord", 7, process.env.APP_URL + 'npc/terr_mon_25282.jpg' ],
  ["Flamestone Golem", 168, process.env.APP_URL + 'npc/410px-Mob_25431.jpg' ],
  ["Gargoyle Lord Sirocco", 36, process.env.APP_URL + 'npc/478px-Mob_25354.jpg' ],
  ["Ghost Of Peasant Leader", 24, process.env.APP_URL + 'npc/ghostboss.png' ],
  ["Harit Tutelar Garangky", 36, process.env.APP_URL + 'npc/Mob_25463.jpg' ],
  ["Ketra Hero Hekaton", 24, process.env.APP_URL + 'npc/ketra_hero_hekaton.jpg' ],
  ["Lilith", 48, process.env.APP_URL + 'npc/506px-Mob_29336.jpg' ],
  ["Malex Herald Of Dagoniel", 36, process.env.APP_URL + 'npc/terr_mon_25373.jpg' ],
  ["Queen Ant", 36, process.env.APP_URL + 'npc/queen_ant.jpg' ],
  ["Queens Nobel Leader", 36, process.env.APP_URL + 'npc/amber.jpg' ],
  ["Roaring Seer Kastor", 40, process.env.APP_URL + 'npc/395px-Mob_25226.jpg' ],
  ["Valakas", 264, process.env.APP_URL + 'npc/valakas.jpg' ],
  ["Varka Hero Shadith", 36, process.env.APP_URL + 'npc/varka_hero_shadith.jpg' ],
  ["Zaken", 60, process.env.APP_URL + 'npc/zaken.jpg' ],
  ["Retreat Spider Cletu", 2, process.env.APP_URL + 'npc/Mob_25007.jpg' ],
  ["Fiercetiger King Angel", 46, process.env.APP_URL + 'npc/631px-Mob_25125.jpg' ],
  ["Furious Thieles", 24, process.env.APP_URL + 'npc/Mob_25010.jpg' ],
  ["Ketra Chief Brakki", 24, process.env.APP_URL + 'npc/ketra_chief_brakki.jpg' ],
  ["Ketra Commander Tayr", 24, process.env.APP_URL + 'npc/ketra_commander_tayr.jpg' ],
  ["Turek Mercenary Boss", 7, process.env.APP_URL + 'npc/amber.jpg' ],
  ["Varka Chief Horuth", 36, process.env.APP_URL + 'npc/varka_chief_horuth.jpg' ],
  ["Varka Commnder Mos", 36, process.env.APP_URL + 'npc/varka_commnder_mos.jpg' ],
];



const arr = []
boss.map(res => {
  let pic = "default.png"
  const avatar = bossOld.find(resx => resx[0] === res[0].trim())

  if(avatar) {
    pic = avatar[2]
  }

  arr.push({
    nome: res[0].trim(), 
    localizacao: res[1].trim(),
    tempo: res[2].trim(),
    avatar: pic
  })

})

console.log(arr)