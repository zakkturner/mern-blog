const express = require("express");
const app = express();
const port = 3001;
require("./db/mongoose");
const postModel = require("./models/postModel");

app.get("/", (req, res) => {
  const posts = postModel.find();
  console.log(posts);
});

app.listen(port, () => {
  console.log(`Port ${port} is running`);
});
