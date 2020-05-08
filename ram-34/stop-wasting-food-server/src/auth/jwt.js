const jwt = require("jsonwebtoken");

const secret =
  process.env.JWT_SECRET || "huhiu!!E@2h2r3usiG83277y23hJDTRT^&%fdh92%$^$^";

function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

function toData(token) {
  return jwt.verify(token, secret);
}

module.exports = { toJWT, toData };
