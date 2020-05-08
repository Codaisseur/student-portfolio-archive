const db = require("../db");
const Sequelize = require("sequelize");
const PracticiansFile = require("../PracticiansFile/model");
const User = require("../User/model");

const Appointment = db.define(
  "appointment",
  {
    startDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    report: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  },
  {
    timestamps: false
  }
);

Appointment.belongsTo(PracticiansFile);
Appointment.belongsTo(User);
PracticiansFile.hasMany(Appointment);
User.hasMany(Appointment);
module.exports = Appointment;
