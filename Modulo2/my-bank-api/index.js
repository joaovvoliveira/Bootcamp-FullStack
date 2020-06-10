const accountRouter = require("./routes/accounts.js");
const express = require("express");
const fs = require("fs").promises;
const app = express();

global.fileName = "accounts.json";

app.use(express.json());
app.use("/account", accountRouter);

app.listen(3001, async () => {
  try {
    //Sem promises
    /*
    fs.readFile(global.fileName, "utf8", (err, data) => {
      if (err) {
        const initialJson = {
          nextId: 1,
          account: [],
        };
        fs.writeFile(global.fileName, JSON.stringify(initialJson), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
    */

    //Com Promises
    await fs.readFile(global.fileName, "utf8");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      account: [],
    };
    fs.writeFile(global.fileName, JSON.stringify(initialJson)).catch((err) => {
      console.log(err);
    });
  }
  console.log("Api Rodou");
});
