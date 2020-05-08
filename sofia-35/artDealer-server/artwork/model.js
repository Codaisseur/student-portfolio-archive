const Sequelize = require("sequelize");
const db = require("../db");
const Artist = require("../artist/model");
const ArtForm = require("../artForm/model");

const Artwork = db.define("artwork", {
  name: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.TEXT, allowNull: true },
  img: { type: Sequelize.TEXT, allowNull: false },
  is_framed: { type: Sequelize.BOOLEAN, allowNull: true },
  price: { type: Sequelize.FLOAT, allowNull: false },
  height_cm: { type: Sequelize.INTEGER, allowNull: true },
  width_cm: { type: Sequelize.INTEGER, allowNull: true },
  weight_kg: { type: Sequelize.FLOAT, allowNull: true },
  ship_country: { type: Sequelize.STRING, allowNull: false },
  is_sold: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
});

Artwork.belongsTo(Artist);
Artist.hasMany(Artwork);
Artwork.belongsTo(ArtForm);
ArtForm.hasMany(Artwork);

module.exports = Artwork;
