const { Router } = require("express");
const Sequelize = require("sequelize");
const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/user");
const auth = require("../auth/middleware");
const router = new Router();
const nodemailer = require("nodemailer");

router.post(
  "/order",
  auth,
  async (req, res, next) => {
    try {
      const addOrder = await Order.create({
        ...req.body,
        userId: req.user.dataValues.id
      });
      res.json(addOrder);
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "noreply.stopfoodwastage@gmail.com",
          pass: `${process.env.GMAIL_PASSWORD}`
        }
      });
      const userInfo = await User.findByPk(req.user.dataValues.id, {
        raw: true
      });

      let mailOptions = {
        from: "noreply.stopfoodwastage@gmail.com",
        to: `${userInfo.email}`,
        subject: `Thank you! for reserving Order`,
        text: `Hi ${userInfo.name}, Thanks for reserving the food. Please find the Order ID - ${addOrder.dataValues.order_id}`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          throw error;
        } else {
          console.log("Email successfully sent!");
        }
      });
      next();
    } catch (error) {
      next(error);
    }
  },
  async (req, res, next) => {
    const updatedProduct = Product.update(
      { quantity: Sequelize.literal("quantity - 1") },
      { where: { id: req.body.productId } }
    );
  }
);

router.put("/processorder", auth, async (req, res, next) => {
  try {
    const findOrder = await Order.findOne({
      where: {
        isProcessed: false,
        timeout: false,
        order_id: req.body.orderId
      }
    });

    if (!findOrder) {
      res
        .status(400)
        .send(
          "Not able to process the order. Order expired or already processed"
        );
    } else {
      const processOrder = await Order.update(
        { isProcessed: true },
        {
          where: {
            isProcessed: false,
            timeout: false,
            order_id: req.body.orderId
          }
        }
      );
    }

    res.json(findOrder);
  } catch (error) {
    res.status(400).send("Not able to process the order. Order expired");
    next(error);
  }
});

module.exports = router;
