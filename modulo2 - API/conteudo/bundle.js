"use strict";
var express = require("express");

var app = express();
var port = 3000;
app.get("/", function (req, res) {
  return res.send("Hello  Novamente");
});
app.listen(port, function () {
  console.log("App Listening on port ".concat(port));
});
