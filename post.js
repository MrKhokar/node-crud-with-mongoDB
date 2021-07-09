const express = require("express");
const router = express.Router();
const Post = require("./models/Post");

// get back all the post

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// submit a post

router.post("/", async (req, res) => {
  const post = new Post({
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    imgUrl: req.body.imgUrl
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// specific post

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete a post

router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.deleteOne({
      _id: req.params.postId
    });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// update

router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          author: req.body.author,
          title: req.body.title,
          description: req.body.description,
          imgUrl: req.body.imgUrl
        }
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
