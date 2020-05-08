const Sequelize = require("sequelize");
const db = require("../db");
const Artwork = require("../artwork/model");

const Material = db.define("material", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: { args: true, msg: "Material already exist!" }
  }
});

Material.belongsToMany(Artwork, { through: "ArtworkMaterials" });
Artwork.belongsToMany(Material, { through: "ArtworkMaterials" });

module.exports = Material;
