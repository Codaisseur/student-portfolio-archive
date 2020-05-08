const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT } = require("./jwt");
const User = require("../User/model");

const router = new Router();

router.post("/login", (request, response, next) => {
  const email = request.body.email;
  const password = request.body.password;
  if (!email || !password) {
    response.status(400).send("Please enter a valid e-mail and password");
  } else {
    User.findOne({ where: { email: request.body.email } })
      .then(user => {
        if (!user) {
          response
            .status(400)
            .send({ message: "User with that email doesn't exist" });
        } else if (bcrypt.compareSync(request.body.password, user.password)) {
          response.send({
            username: user.username,
            userId: user.id,
            practician: user.practician,
            jwt: toJWT({ userId: user.id })
          });
        } else {
          response.status(400).send({
            message: "password is incorrect"
          });
        }
      })
      .catch(error => {
        next(error);
        response.status(500).send({ message: "Something went wrong" });
      });
  }
});

module.exports = router;
