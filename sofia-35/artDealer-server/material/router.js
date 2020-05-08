const { Router } = require("express");
const router = new Router();
const Material = require("./model");
const Artwork = require("../artwork/model");

// add material
router.post("/materials", async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).send("Please supply material name!");
    } else {
      const newMaterial = await Material.create({ name: req.body.name });
      return res.json(newMaterial);
    }
  } catch (error) {
    next(error);
  }
});
// get all materials
router.get("/materials", async (req, res, next) => {
  try {
    const materials = await Material.findAll();
    const cleanMaterials = materials.map(
      material => (material = { id: material.id, name: material.name })
    );
    res.status(201).json(cleanMaterials);
  } catch (error) {
    next(error);
  }
});
// add artwork to material
router.put("/materials/:materialId/artworks", async (req, res, next) => {
  try {
    if (!req.body.artworkId) {
      return res.status(401).send("Provide artwork id");
    }
    const material = await Material.findByPk(req.params.materialId);
    if (material) {
      const updMaterial = await material.addArtwork(req.body.artworkId);
      return res.json(updMaterial);
    }
    return res.status(404).send("Material does not exist");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
