import express from "express";
import winston from "winston";

const app = express();
const port = 3001;

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "grades-control.api.log" }),
  ],
  format: combine(
    label({ label: "grades-control-api" }),
    timestamp(),
    myFormat
  ),
});

console.log(logger.error("Error Log"));
console.log(logger.warn("warn Log"));
logger.info("info Log");
logger.verbose("verbose Log");
logger.debug("debug Log");
logger.silly("silly Log");
logger.log("info", "Hello with Parameter !!");

app.get("/testeAll", (_, res) => res.send("Testando o sistemas"));
app.get("/espor?t?e?/:id/:id2/:id3/:id4", (_, res) =>
  res.send(console.log("teste"))
);
app.get("/narg(uile)?", (_, res) =>
  res.send(console.log("Maleficios do Narguile"))
);
app.get("/roupa+", (_, res) => res.send("E-COMMERCE"));
/*
O caminhos para rotas podem ser definidos por caracteres especiais, como:
Exemplo:
COM ?? => www.teste.com.br/teste? -> se for digitado www.teste.com.br/test -> ele aceita da mesma forma
COM ++ => www.teste.com.br/teste+ -> se for digitado www.teste.com.br/testeeeeeee -> ele aceita da mesma forma
COM ** => www.teste.com.br/test* -> se for digitado www.teste.com.br/testa ou testi ou testu -> ele aceita da mesma forma
COM () => www.teste.com.br/teste? -> se for digitado www.teste.com.br/tes(te) -> ele seleciona um grupo de caracteres
O _ substitui os parametros que não serão usados
*/
app
  .route("/testeRoute")
  .get((_, res) => {
    res.send("GET FUNCIONOU");
    res.end();
  })
  .post((_, res) => {
    res.send("POST FUNCIONOU");
    res.end();
  })
  .delete((_, res) => {
    res.send("DELETE FUNCIONOU");
    res.end();
  });

app.use("/middlewares", (req, res, next) => {
  if (req.method === "GET") {
    res.send("GET FUNCIONOU");
    console.log(new Date());
    next();
  } else {
    res.send("DELETE FUNCIONOU");
    res.end();
  }
});

app.get("/testMiddleware", (_, res) => {
  next();
});

app.get("/testMiddleware2", (_, res) => {
  res.send("GET /testMiddlewareeee");
});

app.listen(port, () => {
  console.log(`API STARTED IN PORT ${port}`);
});


