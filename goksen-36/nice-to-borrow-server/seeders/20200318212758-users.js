"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

/**
 * - importing the User model here to seed data
 * - that way createdAt and updatedAt are added for us
 */

const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * using User.upsert & Promise.all to create users
     *
     * why:
     *
     * - allows us to run "npx sequelize-cli db:seed:all" multiple times
     * - without having to drop the database
     * - it also allows us to harcode the email and id we want
     * - we can now use these ids to seed related data in other seed files
     *
     * how .upsert works
     * - if a user with this email and id doesn't exist: create it
     * - if a user with this email and id does exist: update that user
     * - since we want to create multiple users this way we use Promise.all
     *
     * if you still get a: "ERROR: Validation error", while running this seed
     * - you might have a user with a different id that you're trying to give the same email
     * - you might have a user with a different email that you're trying to assign the same id
     *
     * how to solve the above error:
     *
     * - make sure the combination of id and email in this file are unique
     * - get rid of any duplicates by dropping the db, creating it again, migrating and seeding
     *
     * You can do this using:
     * npx sequelize-cli db:drop
     * npm run initdev (creates db, migrates & seeds)
     *
     */
    const users = await Promise.all([
      User.upsert({
        userName: "Respect_The_Box",
        fullName: "Mario Speedwagon",
        email: "mario@mario.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        location: { type: "Point", coordinates: [4.8851288, 52.36534] },
        // latitude: 52.36534,
        // longitude: 4.8851288,
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      User.upsert({
        userName: "senorjc",
        fullName: "Petey Cruiser",
        email: "petey@petey.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        location: { type: "Point", coordinates: [4.8794803, 52.3727781] },
        // latitude: 52.3727781,
        // longitude: 4.8794803,
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      User.upsert({
        userName: "SecCodeWarrior",
        fullName: "Anna Sthesia",
        email: "anna@anna.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        location: { type: "Point", coordinates: [4.9073196, 52.3641635] },
        // latitude: 52.3641635,
        // longitude: 4.9073196,
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      User.upsert({
        userName: "Tfcall1",
        fullName: "Paul Molive",
        email: "paul@paul.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        location: { type: "Point", coordinates: [4.9216604, 52.3707716] },
        // latitude: 52.3707716,
        // longitude: 4.9216604,
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      User.upsert({
        userName: "Pixelmite",
        fullName: "Greta Life",
        email: "greta@greta.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        location: { type: "Point", coordinates: [4.916167, 52.377754] },
        // latitude: 52.377754,
        // longitude: 4.916167,
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      User.upsert({
        userName: "AllisonGator",
        fullName: "Gail Forcewind",
        email: "gail@gail.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        location: { type: "Point", coordinates: [4.8973246, 52.391537] },
        // latitude: 52.391537,
        // longitude: 4.8973246,
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      User.upsert({
        userName: "foundeverywhere",
        fullName: "Paige Turner",
        email: "paige@paige.com",
        password: bcrypt.hashSync("1234", SALT_ROUNDS),
        location: { type: "Point", coordinates: [4.8454807, 52.3798642] },
        // latitude: 52.3798642,
        // longitude: 4.8454807,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      // User.upsert({
      //   userName: "pbjames23",
      //   fullName: "Bob Frapples",
      //   email: "bob@bob.com",
      //   password: bcrypt.hashSync("1234", SALT_ROUNDS),
      //   latitude: 52.3495022,
      //   longitude: 4.8441968,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }),
      // User.upsert({
      //   userName: "elchago100",
      //   fullName: "Walter Melon",
      //   email: "walter@walter.com",
      //   password: bcrypt.hashSync("1234", SALT_ROUNDS),
      //   latitude: 52.3190285,
      //   longitude: 4.8718545,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }),
      // User.upsert({
      //   userName: "booklover",
      //   fullName: "Nick R. Bocker",
      //   email: "nick@nick.com",
      //   password: bcrypt.hashSync("1234", SALT_ROUNDS),
      //   latitude: 52.3745612,
      //   longitude: 4.8881902,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // })
    ]);

    console.log(`SEEDED: ${users.length} users`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
