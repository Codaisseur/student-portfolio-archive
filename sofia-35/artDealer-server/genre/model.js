const Sequelize = require("sequelize");
const db = require("../db");
const Artwork = require("../artwork/model");

const Genre = db.define("genre", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: { args: true, msg: "Genre already exist!" }
  }
});

Genre.belongsToMany(Artwork, { through: "ArtworkGenres" });
Artwork.belongsToMany(Genre, { through: "ArtworkGenres" });

module.exports = Genre;
