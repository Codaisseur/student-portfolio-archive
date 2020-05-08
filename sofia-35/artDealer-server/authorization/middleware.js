const { toData } = require("./jwt");
const Artist = require("../artist/model");
const Artwork = require("../artwork/model");

function auth(req, res, next) {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");

  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      Artist.findByPk(data.artistId, {
        include: [
          {
            model: Artwork,
            order: [["updatedAt", "DESC"]]
          }
        ]
      })
        .then(artist => {
          if (!artist) return next("Artist does not exist");
          req.artist = artist;
          next();
        })
        .catch(next);
    } catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`
      });
    }
  } else {
    res.status(401).send({
      message: "Please supply valid credentials to login"
    });
  }
}

module.exports = auth;
