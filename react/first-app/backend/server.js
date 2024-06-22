import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
  Practice Question DSA : - 
    arr= [33, 12, 25, 25, 93, 28, 74, 21]
    x = 3
    first number where arr[i]%11 == x

    output :- 25;
*/
