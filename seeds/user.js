const { User } = require("../models");

const userdata = [
  {
    username: "AB",
    password: "password12345",
  },
  {
    username: "CD",
    password: "password12345",
  },
  {
    username: "EF",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
