const router = require("express").Router();
const Campaign = require("../models/campaign");

router.get("/", async (req, res) => {
  const campaigns = await Campaign.find();

  res.send({
    data: campaigns,
  });
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(422).send({
      message: "name is required",
    });
  }

  const campaign = new Campaign({
    name,
  });

  await campaign.save();

  res.status(201).send({
    message: "Campaign created",
    data: campaign,
  });
});

router.put("/:id", async (req, res) => {
  if (!req.body.name) {
    return res.status(422).send({
      message: "name is required",
    });
  }

  await Campaign.updateOne(
    { _id: req.params.id },
    {
      $set: {
        ...req.body,
      },
    }
  );

  res.status(200).send({
    message: "Campaign updated",
  });
});

module.exports = router;
