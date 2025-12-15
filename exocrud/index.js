const express = require("express");
const router = require("./route/router");
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/livres',router);



app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});