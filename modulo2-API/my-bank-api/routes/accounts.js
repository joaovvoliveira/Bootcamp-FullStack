const express = require("express");
const fs = require("fs").promises;
const router = express.Router();

router.post("/", async (req, res) => {
  let account = req.body;
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    account = { id: json.nextId, ...account };
    json.nextId++;
    json.account.push(account);

    await fs.writeFile(global.fileName, JSON.stringify(json));

    res.end();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/", async (_, res) => {
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);
    delete json.nextId;
    res.send(json);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  // req.params.id;
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);
    const result = json.account.find(
      (acc) => acc.id === parseInt(req.params.id, 10)
    );
    if (result) {
      res.send(result);
    } else {
      res.send("Erro na busca");
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    const result = json.account.filter((acc) => acc.id != req.params.id);
    json.account = result;
    await fs.writeFile(global.fileName, JSON.stringify(json));

    res.end();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.put("/", async (req, res) => {
  let newAccount = req.body;
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);
    let oldIndex = json.account.findIndex(
      (account) => account.id == newAccount.id
    );
    json.account[oldIndex].name = newAccount.name;
    json.account[oldIndex].balance = newAccount.balance;

    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.end();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post("/deposit", async (req, res) => {
  let params = req.body;
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);
    let index = json.account.findIndex(
      (account) => account.id === parseInt(params.id)
    );
    if (params.balance < 0)
      throw new Error("Não pode depositar valor negativo");
    json.account[index].balance =
      json.account[index].balance + parseInt(params.balance);

    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.send(json.account[index]);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post("/saque", async (req, res) => {
  let params = req.body;
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);
    let index = json.account.findIndex((account) => account.id == params.id);
    if (params.balance < 0) throw new Error("Não pode Valor negativo");
    if (params.balance > json.account[index].balance)
      throw new Error("Não pode sacar valor maior que o saldo");
    json.account[index].balance -= params.balance;

    fs.writeFile(global.fileName, JSON.stringify(json));
    res.send(json.account[index]);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
