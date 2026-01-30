const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// ================= SIGNUP =================

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    const { data: exist } = await supabase
      .from("userss")
      .select("*")
      .eq("email", email)
      .single();

    if (exist) return res.status(400).json({ error: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from("userss").insert([
      { name, email, password: hashed },
    ]);

    if (error) throw error;

    res.json({ message: "User registered", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= ADD TODO =================

app.post("/add-todo", async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({ error: "Title and userId required" });
    }

    const { data: user } = await supabase
      .from("userss")
      .select("*")
      .eq("id", userId)
      .single();

    if (!user) return res.status(404).json({ error: "User not found" });

    const { data, error } = await supabase.from("todos").insert([
      {
        title,
        description,
        user_id: userId,
      },
    ]);

    if (error) throw error;

    res.json({ message: "Todo added", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= GET USER TODOS =================

app.get("/get-my-todo/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", userId);

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= UPDATE TODO =================

app.put("/update-todo/:todoId", async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const { title, description, is_completed } = req.body;

    const { data: todo } = await supabase
      .from("todos")
      .select("*")
      .eq("id", todoId)
      .single();

    if (!todo) return res.status(404).json({ error: "Todo not found" });

    const { data, error } = await supabase
      .from("todos")
      .update({ title, description, is_completed })
      .eq("id", todoId);

    if (error) throw error;

    res.json({ message: "Todo updated", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= DELETE TODO =================

app.delete("/delete-todo/:todoId", async (req, res) => {
  try {
    const todoId = req.params.todoId;

    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", todoId);

    if (error) throw error;

    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= SERVER =================

app.listen(3000, () => {
  console.log("Server running on port 3000");
});