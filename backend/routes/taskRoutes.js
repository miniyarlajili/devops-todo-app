const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  deleteTask
} = require("../Controllers/taskController");

router.post("/", createTask);
router.get("/", getTasks);
router.delete("/:id", deleteTask);

module.exports = router;