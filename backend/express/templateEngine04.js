const express = require("express");
const app = express();

const port = 3000;

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Express";
  let searchText = "Search Now";
  res.render("index1", {
    siteName: siteName,
    searchText: searchText,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Puma why and when?";
  let blogContent = "It's a very good product";
  res.render("index1", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
