import { getAllTodos, createTodo, deleteTodoById } from "../models/todo.model.js";

export const getTodos = (req, res) => {
  try {
    const todos = getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

export const addTodo = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = createTodo(title);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

export const deleteTodo = (req, res) => {
  try {
    const id = Number(req.params.id);

    const deleted = deleteTodoById(id);
    if (!deleted) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted", deleted });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};