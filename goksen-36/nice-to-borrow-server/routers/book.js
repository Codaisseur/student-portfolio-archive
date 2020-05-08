const { Router } = require("express");
const Book = require("../models").book;
const auth = require("../auth/middleware");
const router = new Router();
const { Op } = require("sequelize");
const User = require("../models").user;
const sequelize = require("sequelize");
// const sequelize = require("../config/db.js"); //sequelize instance

router.get("/", async (req, res) => {
  try {
    const allBooks = await Book.findAll({
      include: User
    });
    res.status(200).json(allBooks);
  } catch (e) {
    console.log("error: ", e);
  }
});

router.get(
  "/:title/:language/:distance/:latitude/:longitude",
  async (req, res) => {
    try {
      console.log("REQ PARAMS", req.params);
      const { title, language, distance, longitude, latitude } = req.params;
      console.log(title, language, distance, longitude, latitude);
      const lat = req.params.latitude;
      const long = req.params.longitude;
      const desiredDistance = req.params.distance;

      let filteredBooks;

      if (title !== "all" && language === "all" && distance !== "all") {
        filteredBooks = await Book.findAll({
          include: [
            {
              model: User,
              attributes: ["location"]
            }
          ],
          where: {
            title: title,

            $and: sequelize.where(
              sequelize.fn(
                "ST_Dwithin",
                // sequelize.literal("location"),
                sequelize.col("user.location"),
                sequelize.literal(`ST_MakePoint(${long},${lat})::geography`),
                desiredDistance
              ),
              true
            )
          }
        });
      }
      if (title === "all" && language !== "all" && distance !== "all") {
        filteredBooks = await Book.findAll({
          include: [
            {
              model: User,
              attributes: ["location"]
            }
          ],
          where: {
            language: language,

            $and: sequelize.where(
              sequelize.fn(
                "ST_Dwithin",
                // sequelize.literal("location"),
                sequelize.col("user.location"),
                sequelize.literal(`ST_MakePoint(${long},${lat})::geography`),
                desiredDistance
              ),
              true
            )
          }
        });
      }
      // else if (title === "all" && language === "all" && distance !== "all"){}
      else if (title === "all" && language === "all" && distance !== "all") {
        filteredBooks = await Book.findAll({
          include: [
            {
              model: User,
              attributes: ["location"]
            }
          ],
          where: sequelize.where(
            sequelize.fn(
              "ST_Dwithin",
              // sequelize.literal("location"),
              sequelize.col("user.location"),
              sequelize.literal(`ST_MakePoint(${long},${lat})::geography`),
              desiredDistance
            ),
            true
          )
        });
        // return res.status(200).json(filteredBooks);
      } else if (title !== "all" && language === "all") {
        filteredBooks = await Book.findAll({
          include: User,
          where: {
            title: title
            // {
            //   [Op.iLike]: " title"
            // }
          }
        });
      } else if (title === "all" && language !== "all") {
        filteredBooks = await Book.findAll({
          where: {
            language: language
          }
        });
      } else {
        filteredBooks = await Book.findAll({
          where: {
            title: title,
            language: language
          }
        });
      }
      console.log("FILTERED BOOKS", filteredBooks);
      return res.status(200).json(filteredBooks);
    } catch (e) {
      console.log("error: ", e);
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findOne({
      where: { id: req.params.id },
      include: User
    });
    res.status(200).json(book);
  } catch (e) {
    console.log("error: ", e);
  }
});

router.patch("/:id", async (req, res) => {
  const book = await Book.findByPk(req.params.id);

  const isAvailable = false;

  await book.update({ isAvailable });

  return res.send({ book });
});

router.post("/", auth, async (req, res, next) => {
  const userId = req.user.id;
  try {
    const {
      title,
      description,
      imageUrl,
      borrowingPeriod,
      author,
      language
    } = req.body;
    if (!title || !author || !language || !borrowingPeriod) {
      res.status(400).send("missing information");
    } else {
      const newBook = await Book.create({
        title,
        description,
        imageUrl,
        borrowingPeriod,
        author,
        language,
        userId
      });
      return res
        .status(201)
        .send({ message: "New book is added successfully", newBook });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
