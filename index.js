const express = require("express");
const format = require("date-format");

const app = express();

PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({ name: "Joy" });
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    userName: "joyahmed",
    followers: 198,
    follows: 145,
    date: format.asString("dd-MM-yyyy", new Date()),
  };
  res.status(200).json(instaSocial);
});

app.get("/api/v1/:id", (req, res) => {
  id = req.params.id;
  res.send(`<h1>${id}</h1>`);
});

app.listen(PORT, () => console.log(`app running at: http://127.0.0.1:${PORT}`));
