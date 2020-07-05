import express from "express";
import { accountModel } from "../models/count.js";

const app = express();

app.get("/account", async (req, res) => {
  try {
    const counts = await accountModel.find({}, {});
    res.send(counts);
  } catch (err) {
    res.status(500).send("Erro", err);
  }
});

app.patch("/account/:agencia/:conta", async (req, res) => {
  const { agencia, conta } = req.params;
  try {
    const counts = await accountModel.findOneAndUpdate(
      { agencia, conta },
      { $inc: req.body },
      { new: true }
    );
    res.send(counts);
    if (!counts) {
      res.status(404).send("Não Localizado");
    } else {
      res.send(counts);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as accountRouter };

/*Crie um endpoint para registrar um depósito em uma conta.
Este endpoint deverá receber como parâmetros a “agencia”, o
 número da “conta” e o valor do depósito. Ele deverá atualizar 
 o “balance” da conta, incrementando-o com o valor recebido 
 como parâmetro. O endpoint deverá validar se a conta informada
  existe, caso não exista deverá retornar um erro, caso exista 
  retornar o saldo atual da conta. */
