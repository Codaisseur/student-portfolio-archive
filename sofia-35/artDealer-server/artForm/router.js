const { Router } = require("express");
const router = new Router();
const ArtForm = require("./model");

// add art form
router.post("/artforms", async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).send("Please supply art form name!");
    } else {
      const newArtForm = await ArtForm.create({ name: req.body.name });
      return res.json(newArtForm);
    }
  } catch (error) {
    next(error);
  }
});
// get all art forms
router.get("/artforms", async (req, res, next) => {
  try {
    const artForms = await ArtForm.findAll();
    const cleanArtForms = artForms.map(
      artForm => (artForm = { id: artForm.id, name: artForm.name })
    );
    res.status(201).json(cleanArtForms);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
