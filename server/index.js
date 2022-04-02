const express = require("express");
const app = express();
const port = 3001;
require("./db/mongoose");
const cors = require("cors");
app.use(cors());
const postModel = require("./models/postModel");

app.get("/posts/all", async (req, res) => {
  try {
    const posts = await postModel.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Port ${port} is running`);
});
