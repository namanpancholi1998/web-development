const express = require("express");
const blog = require("./routers/blog");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/blog", blog);

// 1. Handling Post and other request
// app.get("/", (req, res) => {
//   // this request is using for read
//   console.log("This is a GET request");
//   res.send("Hello Get!");
// });

// // checking with myPage.html in public folder
// app.post("/", (req, res) => {
//   // this request is using for create
//   console.log("This is a POST request");
//   res.send("Hello Post!");
// });

// app.put("/", (req, res) => {
//   // this request is using for update
//   console.log("This is a PUT request");
//   res.send("Hello PUT!");
// });

// app.delete("/", (req, res) => {
//   // this request is using for delete
//   console.log("This is a DELETE request");
//   res.send("Hello DELETE!");
// });

// 2. Chaining of request
// app
//   .get("/about", (req, res) => {
//     // this request is using for read
//     console.log("This is a GET request");
//     res.send("Hello About!");
//   })
//   .post("/about", (req, res) => {
//     // this request is using for create
//     console.log("This is a POST request");
//     res.send("Hello Post!");
//   })
//   .put("/about", (req, res) => {
//     // this request is using for update
//     console.log("This is a PUT request");
//     res.send("Hello PUT!");
//   })
//   .delete("/about", (req, res) => {
//     // this request is using for delete
//     console.log("This is a DELETE request");
//     res.send("Hello DELETE!");
//   });

// 3. Serving HTML Files
app.get("/index", (req, res) => {
  console.log("Hello HTML File");
  res.sendFile(__dirname + "/templates/index.html");
});

// sending JSON
app.get("/api", (req, res) => {
  res.json({ name: "Naman", age: 25, city: "Ajmer" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
