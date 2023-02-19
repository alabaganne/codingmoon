const router = require("express").Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
  const posts = await Post.find();

  res.send({
    data: posts,
  });
});

router.post("/", async (req, res) => {
  const { description, imageUrl } = req.body;

  if (!description || !imageUrl) {
    return res
      .status(422)
      .send({ message: "description, and imageUrl are required" });
  }

  const post = new Post({
    ...req.body,
  });

  await post.save();

  return res.status(201).send({
    message: "Post saved",
    data: post,
  });
});

router.put("/:id", async (req, res) => {
  await Post.updateOne(
    { _id: req.params.id },
    {
      $set: {
        ...req.body,
      },
    }
  );

  res.status(200).send({
    message: "Post updated",
  });
});

module.exports = router;
