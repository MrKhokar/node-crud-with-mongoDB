const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// import routes
const postRoute = require("./post");
app.use("/posts", postRoute);

// routes

app.get("/", (req, res) => {
  res.send("home");
});

mongoose.connect(
  "mongodb://localhost/posts",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

app.listen(3000);
