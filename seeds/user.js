const { User } = require("../models");

const userdata = [
  {
    username: "AB",
    password: "password",
  },
  {
    username: "CD",
    password: "password",
  },
  {
    username: "EF",
    password: "password",
  },
];

const seedUsers = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
