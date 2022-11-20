const seedUsers = require("./user.js");
const seedPosts = require("./post.js");
const seedComments = require("./comment.js");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedAll();
