const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT } = require("./jwt");
const Artist = require("../artist/model");
const auth = require("./middleware");
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    if (!req.body.login || !req.body.password) {
      res.status(400).send({
        message: "Please supply valid login and password"
      });
    } else {
      const entity = await Artist.findOne({ where: { login: req.body.login } });
      if (!entity) {
        res.status(400).send({
          message: "Artist with this login does not exist"
        });
      } else if (bcrypt.compareSync(req.body.password, entity.password)) {
        res.send({
          jwt: toJWT({ artistId: entity.id })
        });
      } else {
        res.status(400).send({
          message: "Password was incorrect"
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Something went wrong"
    });
  }
});
// artist personal data fetching
router.get("/secret/loggedArtist", auth, (req, res) => {
  res.status(200).json(req.artist);
});

module.exports = router;
