import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  isManager: {
    type: Boolean,
    required: true,
  },
});

export const Employee = mongoose.model("Employee", EmployeeSchema);
