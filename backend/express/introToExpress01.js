const express = require("express");

const app = express();
const port = 3000;

// middleware
app.use(express.static("public"));

// app.get, app.post, app.put, app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog!");
});

app.get("/blog/:slug", (req, res) => {
  //   console.log(req.params);
  res.send(`Hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Main app listening at http://localhost:${port}`);
});
