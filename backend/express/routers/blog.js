const express = require("express");
const router = express.Router();

// this is a blog router use in allMethods02.js

// define the home page route
router.get("/", (req, res) => {
  res.send("Home Page!");
});

// define the about route
router.get("/about", (req, res) => {
  res.send("About Page!");
});

// define the blog post route
router.get("/post/:slug", (req, res) => {
  res.send(`fetch the blog post from ${req.params.slug}`);
});

module.exports = router;
