import { promises, appendFile } from "fs";
import express from "express";

const { readFile, writeFile } = promises;
const app = express();
app.use(express.json());

app.get("/times/campeao", (req, res) => {
  res.send("Hello IGTI");
});
app.listen(3000, () => {
  console.log("API STARTOU");
});

const times = [];

readFile("./2003.json")
  .then((resp) => {
    const data = JSON.parse(resp);
    //montando array de times
    data[0].partidas.forEach((partida) => {
      times.push({ timeM: partida.mandante, pontuacao: 0 });
      times.push({ timeV: partida.visitante, pontuacao: 0 });
    });

    //preenchendo a pontuacao dos times no array
    data.forEach((rodada) => {
      rodada.partidas.forEach((partida) => {
        const indexMandante = times.findIndex(
          (item) => item.time === partida.mandante
        );
        const indexVisitante = times.findIndex(
          (item) => item.time === partida.visitante
        );

        let timeVisitante = times[indexVisitante];
        let timeMandante = times[indexMandante];

        if (partida.placar_visitante > partida.placar_mandante) {
          timeVisitante.pontuacao += 3;
          time[indexVisitante] = partida.timeVisitante;
        } else if (partida.placar_mandante > partida.placar_visitante) {
          timeMandante.pontuacao += 3;
          time[indexMandante] = partida.timeMandante;
        } else {
          timeMandante.pontuacao += 1;
          timeVisitante.pontuacao += 1;
          times[indexVisitante] = timeVisitante;
          times[indexMandante] = timeMandante;
        }

        /*
        partida.mandante
        partida.visitante
        placar_visitante
        placar_mandante
        */
      });
    });
    times.sort((a, b) => {
      return b.pontuacao - a.pontuacao;
    });

    console.log(times[0]);
  })
  .catch((err) => {
    console.log(err);
  });
