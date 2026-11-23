const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps!");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = app;
