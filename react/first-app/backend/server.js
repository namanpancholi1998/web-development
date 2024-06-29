import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World! form get request");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World! from post request");
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
