import express from "express";
import mongoose from "mongoose";

const app = express();

import { accountRouter } from "./routes/accountRouter.js";

mongoose
  .connect(
    "mongodb+srv://joao-oliveira:258002@bootcamp.aovy8.mongodb.net/accounts?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((err) => "Erro ao conectar Local");

app.use(express.json());
app.use(accountRouter);

app.listen(3000, () => console.log("Servidor Conectado"));

async function exercicio() {
  const data = await fetch("./accounts.json");
  const json = await data.json();
  console.log(json);
}
