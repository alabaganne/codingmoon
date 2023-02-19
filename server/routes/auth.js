const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const User = require("../models/user");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(422).send("email, and password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).send({ message: "Invalid credentials" });
  }

  bcrypt.compare(password, user.password, function (err, areEqual) {
    if (!areEqual)
      return res.status(401).send({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user.id }, process.env.PRIVATE_KEY);

    res.send({
      message: "Success",
      token: token,
    });
  });
});

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });

      await user.save();

      res.status(201).send({
        message: "User created successfully",
        user,
      });
    });
  } else {
    return res.status(422).send("name, email, and password are required");
  }
});

module.exports = router;
