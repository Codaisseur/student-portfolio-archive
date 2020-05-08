const { Router } = require("express");
const Sequelize = require("sequelize");
const Store = require(`../models/store`);
const auth = require("../auth/middleware");
const router = new Router();

router.get("/store", auth, async (req, res, next) => {
  try {
    const findStore = await Store.findOne(
      { where: { userId: req.query.userId } },
      { raw: true }
    );
    res.json(findStore);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
