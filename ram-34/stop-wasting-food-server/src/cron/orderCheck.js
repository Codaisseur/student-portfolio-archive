const Order = require("../models/order");
const Product = require("../models/product");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const CronJob = require("cron").CronJob;

const job = new CronJob("*/15 * * * *", async () => {
  const unprocessedOrder = await Order.findAll(
    {
      where: {
        isProcessed: false,
        timeout: false,
        createdAt: {
          [Op.lt]: new Date(Date.now() - 30 * 60 * 1000)
        }
      }
    },
    { raw: true }
  );

  const parsedUnprocessedOrder = JSON.parse(JSON.stringify(unprocessedOrder));
  console.log(
    "This Cron will run every 15 min to check order ",
    parsedUnprocessedOrder
  );

  parsedUnprocessedOrder.map(order => {
    Order.update({ timeout: true }, { where: { id: order.id } });
    Product.update(
      { quantity: Sequelize.literal("quantity + 1") },
      { where: { id: order.productId } }
    );
  });
});
job.start();

module.exports = job;
