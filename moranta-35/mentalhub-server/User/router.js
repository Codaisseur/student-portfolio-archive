const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

async function createUser(request, response, next) {
  try {
    const { email, password, firstName, lastName } = request.body;
    if (!email || !password || !firstName || !lastName) {
      response.status(400).send("Please complete the form");
    } else {
      const user = {
        ...request.body,
        password: bcrypt.hashSync(password, 10)
      };
      const createUser = await User.create(user);

      response.json(createUser);
    }
  } catch (error) {
    next(error);
  }
}

router.post("/signup", createUser);

module.exports = router;
