const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});

app.get("/param/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Le paramètre est ${name}`);
});
app.get("/paramsQ", (req, res) => {
  const name = req.query.name;
  const prenom = req.query.prenom;
  res.send(`Les paramètres sont name : ${name}, prenom : ${prenom}`);
});

app.get("/not-found", (req, res) => {
  res.status(404).send("Not Found");
});


app.listen(PORT, () => {
  console.log(`Serveur started on port ${PORT}`);
});