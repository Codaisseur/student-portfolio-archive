const Sequelize = require("sequelize");
const db = require("../db");
const Artist = require("../artist/model");

const ArtForm = db.define("artForm", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: { args: true, msg: "Art form already exist!" }
  }
});

ArtForm.belongsToMany(Artist, { through: "ArtistArtForms" });
Artist.belongsToMany(ArtForm, { through: "ArtistArtForms" });

module.exports = ArtForm;
