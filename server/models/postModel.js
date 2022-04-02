const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  content: String,
  date: Number,
});

const postModel = mongoose.model("post", postSchema);

module.exports = mongoose.model("Post", postSchema);
