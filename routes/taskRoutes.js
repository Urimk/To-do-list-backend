import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getTasks,
  AddTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";
const router = express.Router();

router.get("/", protect, getTasks);
router.post("/", protect, AddTask);
router.delete("/:id", protect, deleteTask);
router.put("/:id", protect, updateTask);

export default router;
