const { Router } = require("express");
const router = new Router();
const Genre = require("./model");
const Artwork = require("../artwork/model");

// add genre
router.post("/genres", async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).send("Please supply genre name!");
    } else {
      const newGenre = await Genre.create({ name: req.body.name });
      return res.json(newGenre);
    }
  } catch (error) {
    next(error);
  }
});
// get all genres
router.get("/genres", async (req, res, next) => {
  try {
    const genres = await Genre.findAll();
    const cleanGenres = genres.map(
      genre => (genre = { id: genre.id, name: genre.name })
    );
    res.status(201).json(cleanGenres);
  } catch (error) {
    next(error);
  }
});
// add artwork to genre
router.put("/genres/:genreId/artworks", async (req, res, next) => {
  try {
    if (!req.body.artworkId) {
      return res.status(401).send("Provide artwork id");
    }
    const genre = await Genre.findByPk(req.params.genreId);
    if (genre) {
      const updGenre = await genre.addArtwork(req.body.artworkId);
      return res.json(updGenre);
    }
    return res.status(404).send("Genre does not exist");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
