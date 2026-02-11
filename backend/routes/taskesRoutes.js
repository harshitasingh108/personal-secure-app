const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

const authMiddleware = require("../middleware/authmiddleware");

router.post("/task", authMiddleware, async (req, res) => {
    const { title } = req.body;
    const newtask = new Task({
        title,
        userId: req.userId
    })
    await newtask.save();
    res.json(newtask);
})
// add
router.post("/add", authMiddleware, async (req, res) => {
    const { title } = req.body;
    const newtask = new Task({
        title,
        userId: req.userId
    });
    await newtask.save();
    res.json(newtask);
})

// get all task
router.get("/tasks", authMiddleware, async (req, res) => {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
})

// delete task
router.delete("/delete/:id", authMiddleware, async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
})

module.exports = router;








