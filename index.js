const express = require("express");
const app = express();
const PORT = 8080;

import data from "./data.js";

app.listen(PORT, () =>
  console.log(`FC Barcelona API is alive on port ${PORT}`)
);

app.get("/players", (req, res) => {
  res.status(200).send({ data });
});
