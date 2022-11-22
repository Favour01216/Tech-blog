const { Post } = require("../models");

const postdata = [
  {
    title: "Beautiful Day",
    content: "This is a beautiful day",
    user_id: 1,
  },
  {
    title: "Fields",
    content: "This is the greenest field",
    user_id: 2,
  },
  {
    title: "Do you hear it?",
    content: "This is very musical, listen!",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
