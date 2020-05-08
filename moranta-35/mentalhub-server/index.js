const express = require("express");
const cors = require("cors");
const userRouter = require("./User/router");
const practicianRouter = require("./PracticiansFile/router");
const patientRouter = require("./PatientsFile/router");
const appointmentRouter = require("./Appointment/router");
const authRouter = require("./auth/router");
const app = express();
const corsMiddleware = cors();
const jsonParser = express.json();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(corsMiddleware);
app.use(jsonParser);
app.use(userRouter);
app.use(authRouter);
app.use(practicianRouter);
app.use(patientRouter);
app.use(appointmentRouter);
