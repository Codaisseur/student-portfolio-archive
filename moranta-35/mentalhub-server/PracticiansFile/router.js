const { Router } = require("express");
const PracticiansFile = require("../PracticiansFile/model");
const User = require("../User/model");
const auth = require("../auth/middleware");

const router = new Router();

async function getPracticians(request, response, next) {
  try {
    const limit = request.query.limit || 20;
    const offset = request.query.offset || 0;

    const practicians = await PracticiansFile.findAndCountAll({
      limit,
      offset,
      include: [User]
    });

    response.json(practicians);
  } catch (error) {
    next(error);
  }
}

async function createPracticianFile(request, response, next) {
  try {
    const fullRequest = { ...request.body, userId: request.user.dataValues.id };
    const practicianFile = await PracticiansFile.create(fullRequest);
    response.json(practicianFile);
  } catch (error) {
    next(error);
  }
}

async function getUniquePractician(request, response, next) {
  try {
    const id = request.params.id;
    const uniquePractician = await PracticiansFile.findByPk(id, {
      include: [User]
    });
    response.json(uniquePractician);
  } catch (error) {
    next(error);
  }
}

router.get("/practicians", getPracticians);
router.get("/practicians/:id", getUniquePractician);
router.post("/practicians", auth, createPracticianFile);

module.exports = router;
