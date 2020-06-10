const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
  let account = req.body;
  fs.readFile(global.fileName, "utf8", (err, data) => {
    if (!err) {
      try {
        let json = JSON.parse(data);
        account = { id: json.nextId, ...account };
        json.nextId++;
        json.account.push(account);

        fs.writeFile(global.fileName, JSON.stringify(json), (err) => {
          if (err) {
            res.status(400).send({ error: err.message });
          } else {
            res.send("Inserido no array");
          }
        });
      } catch (err) {
        res.status(400).send({ error: err.message });
      }
    } else {
      res.status(400).send({ error: err.message });
    }
  });

  // fs.appendFile(global.fileName, JSON.stringify(params), (err) => {
  //   console.log(err);
  // });
  // res.send("post Account");
});

router.get("/", (_, res) => {
  fs.readFile(global.fileName, "utf8", (err, data) => {
    if (!err) {
      let json = JSON.parse(data);
      delete json.nextId;
      res.send(json);
    } else {
      res.status(400).send({ error: err.message });
    }
  });
});

router.get("/:id", (req, res) => {
  // req.params.id;
  fs.readFile(global.fileName, "utf8", (err, data) => {
    try {
      if (!err) {
        let json = JSON.parse(data);
        const result = json.account.find((acc) => acc.id == req.params.id);
        res.send(result);
      } else {
        res.status(400).send({ error: err.message });
      }
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
});

router.delete("/:id", (req, res) => {
  fs.readFile(global.fileName, "utf8", (err, data) => {
    try {
      let json = JSON.parse(data);
      const result = json.account.filter((acc) => acc.id != req.params.id);
      json.account = result;

      fs.writeFile(global.fileName, JSON.stringify(json), (err) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else {
          res.send("Excluido do Array, consulte novamente");
        }
      });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
});

router.put("/", (req, res) => {
  let newAccount = req.body;
  fs.readFile(global.fileName, "utf8", (err, data) => {
    try {
      if (err) throw err;

      let json = JSON.parse(data);
      let oldIndex = json.account.findIndex(
        (account) => account.id == newAccount.id
      );
      json.account[oldIndex].name = newAccount.name;
      json.account[oldIndex].balance = newAccount.balance;

      fs.writeFile(global.fileName, JSON.stringify(json), (err) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else {
          res.end();
        }
      });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
});

router.post("/deposit", (req, res) => {
  let params = req.body;
  fs.readFile(global.fileName, "utf8", (err, data) => {
    try {
      if (err) throw err;

      let json = JSON.parse(data);
      let index = json.account.findIndex((account) => account.id == params.id);
      if (params.balance < 0)
        throw new Error("Não pode depositar valor negativo");
      json.account[index].balance += params.balance;

      fs.writeFile(global.fileName, JSON.stringify(json), (err) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else {
          res.end();
        }
      });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
});

router.post("/saque", (req, res) => {
  let params = req.body;
  fs.readFile(global.fileName, "utf8", (err, data) => {
    try {
      if (err) throw err;

      let json = JSON.parse(data);
      let index = json.account.findIndex((account) => account.id == params.id);
      if (params.balance < 0) throw new Error("Não pode Valor negativo");
      if (params.balance > json.account[index].balance)
        throw new Error("Não pode sacar valor maior que o saldo");
      json.account[index].balance -= params.balance;

      fs.writeFile(global.fileName, JSON.stringify(json), (err) => {
        if (err) {
          res.status(400).send({ error: err.message });
        } else {
          res.end();
        }
      });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
});

module.exports = router;
