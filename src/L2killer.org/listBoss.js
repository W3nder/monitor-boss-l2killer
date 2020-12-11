module.exports = (json) => {
  const boss = [];
  n = 0;
  boss[n] = ["name", "status", "data"];
  json.forEach((element) => {
    if (element[0]) {
      let status;
      let date;
      n++;
      switch (element[1]) {
        case "Morto":
        case "Dead":
        case "Muerto":
          status = "Morto";
          break;
        case "Vivo":
        case "Alive":
          status = "Vivo";
          break;
      }

      boss[n] = [element[0], status, element[2]];
    }
  });
  return boss;
};
