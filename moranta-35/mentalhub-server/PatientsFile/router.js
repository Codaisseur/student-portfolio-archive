const { Router } = require("express");
const PatientsFile = require("../PatientsFile/model");

const router = new Router();

async function createPatient(request, response, next) {
  try {
    //const fullRequest = { ...request.body, userId: request.user.dataValues.id };
    const test = {
      ...request.body,
      userId: 2
    };
    const practicianFile = await PatientsFile.create(test);
    response.json(practicianFile);
  } catch (error) {
    next(error);
  }
}

router.post("/patients", createPatient);

module.exports = router;
