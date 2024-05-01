const express = require("express");
const bodyparser = require("body-parser");

const app = express();

//Middle ware
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/add", (req, res) => {
  const { number } = req.body;

  let sum = number + number;

  res.send(`${sum}`);
});

app.listen(3001, () => {
  console.log("Running Port:" + 3001);
});
