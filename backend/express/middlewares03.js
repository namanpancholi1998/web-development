const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// app.use(express.static("public"));

// Middleware 1 for logging request
app.use((req, res, next) => {
  console.log("This is my first middleware");
  console.log(req.headers);
  req.naman = "Hello Naman";
  fs.appendFileSync(
    "log.txt",
    `${Date.now()} is a ${req.method} request to ${req.url}\n`
  );
  // next();
  //   console.log(`${Date.now()} is a ${req.method} request to ${req.url}`);
  // agr response send ho jaye to next nhi krna hai nhi tho err aayega
  //   res.send("Hello World! from first middleware");

  next();
});

app.use((req, res, next) => {
  console.log("This is my second middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World! " + req.naman);
});

app.get("/about", (req, res) => {
  res.send("Hello about!");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
