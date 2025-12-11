const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post("/", async (req, res) => {
    const newTask = await Task.create({ title: req.body.title });
    res.status(201).json(newTask);
});

module.exports = router;
