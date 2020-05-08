const { Router } = require("express");
const Borroweditem = require("../models").borrowedItem;
const auth = require("../auth/middleware");
const router = new Router();
const { Op } = require("sequelize");
const User = require("../models").user;
const Book = require("../models").book;
const sequelize = require("sequelize");

router.post("/", auth, async (req, res, next) => {
  try {
    const { bookId, startDate, userId, endDate } = req.body;
    const borrowed = await Borroweditem.create({
      bookId,
      startDate,
      endDate,
      userId
    });
    return res
      .status(201)
      .send({ message: "BorrowedItem is created successfully", borrowed });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
