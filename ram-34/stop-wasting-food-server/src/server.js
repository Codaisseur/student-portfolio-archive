require("dotenv").config();
const express = require("express");
const Sse = require("json-sse");
const stream = new Sse();
const graphqlHTTP = require("express-graphql");
const app = express();
const cors = require("cors");
const schema = require("./schema/schema");
const port = process.env.PORT;
const userRoute = require("./router/user");
const storeRoute = require("./router/store");
const productStream = require("./stream/productStream");
const orderRoute = require("./router/order");
const orderCron = require("./cron/orderCheck");

app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(storeRoute);
app.use(orderRoute);
app.use(productStream(stream));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () =>
  console.log(`Server started and running on port:${port}`)
);
