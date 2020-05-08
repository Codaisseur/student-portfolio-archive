const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Role = require("../models/role");
const Store = require("../models/store");
const { toJWT } = require("../auth/jwt");
const router = new Router();
const NodeGeocoder = require("node-geocoder");
const options = {
  provider: "google",
  apiKey: process.env.GOOGLE_API_KEY,
};

const geocoder = NodeGeocoder(options);

router.post(
  "/user",
  async (req, res, next) => {
    const { name, email, password, roleId } = req.body;
    if (!name || !email || !password || !roleId) {
      return res
        .status(400)
        .send("Missing name or email or password or role in request body");
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
      const user = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
        roleId: roleId,
      });
      //res.status(201).send("User created");

      req.userId = user.id;
      next();
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(400).send("User already exist");
      } else {
        return res.status(400).send("Bad request");
      }
    }
  },
  async (req, res) => {
    const { roleId, storeName, storeAddress, postalCode, city } = req.body;

    if (roleId === "2") {
      return res.status(201).send("User created");
    } else if (!req.userId) {
      return res.status(400).send("Missing Store Admin");
    }
    if (storeName || storeAddress || postalCode || city) {
      const googleRes = await geocoder.geocode({
        address: storeAddress,
        city: city,
        zipcode: postalCode,
      });

      try {
        const store = await Store.create({
          name: storeName,
          address: storeAddress,
          postal_code: postalCode,
          userId: req.userId,
          city: city,
          latitude: googleRes[0].latitude,
          longitude: googleRes[0].longitude,
        });
        res.status(201).send("User created");
      } catch (error) {
        return res.status(400).send("Bad request");
      }
    }
  }
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("checking email and password", email, password);

  if (!email || !password) {
    return res.status(400).send("Missing email or password in request body");
  }
  const user = await User.findOne({ where: { email: email } });
  console.log("checking user", user);

  const passwordValid = bcrypt.compareSync(password, user.password);

  if (passwordValid) {
    const token = toJWT({ id: user.id });
    return res.status(200).send({
      name: user.name,
      id: user.id,
      email: user.email,
      token: token,
      roleId: user.roleId,
    });
  } else {
    return res.status(403).send("Invalid credential");
  }
});

module.exports = router;
