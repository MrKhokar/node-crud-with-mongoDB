const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  author: String,
  title: String,
  discription: String,
  imgUrl: String
});

module.exports = mongoose.model('Post', postSchema);
