const express = require("express");
const app = express();
const port = 8010;
const path = require("path");

const rootDir = __dirname;

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

