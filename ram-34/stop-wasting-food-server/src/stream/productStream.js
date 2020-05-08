const { Router } = require("express");
const Sequelize = require("sequelize");
const Product = require("../models/product");
const Store = require("../models/store");
const User = require("../models/user");
const auth = require("../auth/middleware");
const router = new Router();

function factory(stream) {
  router.get("/productlist", async (req, res, next) => {
    try {
      const allProduct = await Product.findAll({
        attributes: ["id", "name", "quantity", "imageurl", "storeId"],
        include: [
          {
            model: Store,
            attributes: [
              "name",
              "address",
              "postal_code",
              "userId",
              "city",
              "latitude",
              "longitude",
            ],
          },
        ],
      });
      const action = {
        type: "ALL_PRODUCT",
        payload: allProduct,
      };
      const json = JSON.stringify(action);
      stream.updateInit(json);
      stream.init(req, res);
    } catch (error) {
      next(error);
    }
  });

  router.post("/product", auth, async (req, res, next) => {
    try {
      console.log({ ...req.body });

      const response = await Product.create({ ...req.body });
      const oneProduct = await Product.findByPk(response.id, {
        attributes: ["id", "name", "quantity", "imageurl", "storeId"],
        include: [
          {
            model: Store,
            attributes: [
              "name",
              "address",
              "postal_code",
              "userId",
              "city",
              "latitude",
              "longitude",
            ],
          },
        ],
      });
      const action = {
        type: "ONE_PRODUCT",
        payload: oneProduct,
      };
      const stringAction = JSON.stringify(action);
      stream.send(stringAction);
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
module.exports = factory;
