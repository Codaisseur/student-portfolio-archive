const Sequelize = require("sequelize");
const { Router } = require("express");
const router = new Router();
const bcrypt = require("bcrypt");
const Artist = require("./model");
const Artwork = require("../artwork/model");

// create new artist
router.post("/artists", async (req, res, next) => {
  try {
    if (!req.body.login || !req.body.password || !req.body.email) {
      return res.status(400).send("Please supply username, email and password");
    } else {
      const artist = {
        login: req.body.login,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
      };
      const artistPost = await Artist.create(artist);
      return res.json(artistPost);
    }
  } catch (error) {
    if (Sequelize.ValidationError) {
      const message = error.errors.map(error => error.message);
      res.status(400).json(message);
    }
    next(error);
  }
});
// get artists
router.get("/artists", async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 15, 500);
    const offset = req.query.offset || 0;
    const artists = await Artist.findAndCountAll({
      attributes: { exclude: ["password", "email", "login"] },
      order: [["createdAt", "DESC"]],
      limit,
      offset
    });
    if (artists.count) {
      return res.send({ artists: artists.rows, total: artists.count });
    } else {
      res.status(404).send("No artists exist");
    }
  } catch (error) {
    next(error);
  }
});
// get artist by Id (public info)
router.get("/artists/:artistId", async (req, res, next) => {
  try {
    const artist = await Artist.findByPk(req.params.artistId, {
      attributes: { exclude: ["password", "email", "updatedAt"] },
      include: [
        {
          model: Artwork
        }
      ]
    });
    if (artist) {
      return res.json(artist);
    } else {
      return res.status(404).send("Artist does not exist");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
