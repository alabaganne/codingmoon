const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  budget: {
    type: Number,
    default: 0,
  },
  reach: {
    type: Number,
    default: 0,
  },
});

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
