const express = require("express");
const fs = require("fs");
const rateLimiter = require("../middleware/ratelimiter.middleware");
const validateTodo = require("../middleware/validateTodo.middleware");

const router = express.Router();
const DB_PATH = "./src/db.json";

// Helper
const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// CREATE
router.post("/add", validateTodo, (req, res) => {
  const data = readDB();
  const newTodo = {
    id: Date.now(),
    title: req.body.title
  };
  data.todos.push(newTodo);
  writeDB(data);
  res.status(201).json(newTodo);
});

// READ ALL
router.get("/", rateLimiter, (req, res) => {
  const data = readDB();
  res.json(data.todos);
});

// READ ONE
router.get("/:todoId", (req, res) => {
  const data = readDB();
  const todo = data.todos.find(t => t.id == req.params.todoId);
  res.json(todo || {});
});

// UPDATE
router.put("/update/:todoId", (req, res) => {
  const data = readDB();
  data.todos = data.todos.map(t =>
    t.id == req.params.todoId ? { ...t, ...req.body } : t
  );
  writeDB(data);
  res.json({ message: "Todo updated" });
});

// DELETE
router.delete("/delete/:todoId", (req, res) => {
  const data = readDB();
  data.todos = data.todos.filter(t => t.id != req.params.todoId);
  writeDB(data);
  res.json({ message: "Todo deleted" });
});

module.exports = router;