const Task = require("../models/Task");

// Create
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

// Get all
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Delete
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};