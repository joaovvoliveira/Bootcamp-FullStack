const accountRouter = require("./routes/accounts.js");
const express = require("express");
const fs = require("fs");
const app = express();

global.fileName = "accounts.json";

app.use(express.json());
app.use("/account", accountRouter);

app.listen(3001, () => {
  try {
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
  } catch (err) {
    console.log(err);
  }
  console.log("API RODOU");
});
