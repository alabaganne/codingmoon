const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: String,
  imageUrl: String,
  channels: [String], // like targets (e.g: facebook, tiktok, instagram)
  campaignId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campaign",
    required: true,
  },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
