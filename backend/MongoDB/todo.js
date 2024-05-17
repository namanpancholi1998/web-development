// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

// let conn = await mongoose.connect("mongodb://localhost:27017/todo");
mongoose.connect("mongodb://127.0.0.1:27017/todo");
// console.log(conn);
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    name: "Naman",
    description: "Learn MongoDB",
    status: false,
  });
  todo.save();
  res.send("Hello World!");
});

app.get("/about", async (req, res) => {
  let todo = await Todo.findOne({});
  res.json({
    name: todo.name,
    description: todo.description,
    status: todo.status,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
