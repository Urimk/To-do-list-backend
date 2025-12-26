const express = require("express");
const router = express.Router();

const {
  getTasks,
  AddTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.get("/", getTasks);
router.post("/", AddTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;
