/*
    Dummy Data Generator -> in this format in a collection called Employees in a DB called company 

    {
        name: "naman",
        salary: 45000,
        language: "JavaScript",
        city: "New York",
        isManager: true
    }

    Generate 10 records when a button called generate  data is clicked!

    create a express app with mongoose to achieve it.

    Every time the button is clicked, you should clear the collection and generate 10 records.

*/

import mongoose from "mongoose";
import express from "express";
import { Employee } from "./models/Employee.js";

mongoose.connect("mongodb://127.0.0.1:27017/company");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  await Employee.deleteMany({});

  for (let i = 0; i < 10; i++) {
    const employee = new Employee({
      name: generateRandomName(),
      salary: generateRandomSalary(),
      language: generateRandomLanguage(),
      city: generateRandomCity(),
      isManager: generateRandomBoolean(),
    });
    await employee.save();
  }
  res.send("Data Generated!");
});

function generateRandomName() {
  let Names = [
    "Naman",
    "Shubham",
    "Deepanshu",
    "Pranav",
    "Pratishtha",
    "Aman",
    "Naman",
    "Shubham",
    "Deepanshu",
    "Pratishtha",
  ];
  return Names[Math.floor(Math.random() * Names.length)];
}

function generateRandomSalary() {
  return Math.floor(Math.random() * 100000);
}

function generateRandomLanguage() {
  let languages = ["JavaScript", "Python", "Java", "C++", "C#"];
  return languages[Math.floor(Math.random() * languages.length)];
}

function generateRandomCity() {
  let cities = ["New York", "London", "Paris", "Sydney", "Tokyo"];
  return cities[Math.floor(Math.random() * cities.length)];
}

function generateRandomBoolean() {
  return Math.random() < 0.5;
}

app.get("/about", async (req, res) => {
  let employee = await Employee.findOne({});
  res.json({
    name: employee.name,
    salary: employee.salary,
    language: employee.language,
    city: employee.city,
    isManager: employee.isManager,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
