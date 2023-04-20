const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const catagories = require("./data/catagories.json");

app.get("/", (req, res) => {
  res.send("Dragon is running");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.listen(port, () => {
  console.log(`Dragon API is running ${port}`);
});
