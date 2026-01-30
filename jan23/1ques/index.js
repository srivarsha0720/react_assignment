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

// Validation
function validateUser(req, res, next) {
  const { name, email, password, age } = req.body;

  if (!name) return res.status(400).json({ error: "Name required" });
  if (!email || !email.includes("@"))
    return res.status(400).json({ error: "Invalid email" });

  if (!password || password.length < 8)
    return res.status(400).json({ error: "Password min 8 chars" });

  if (age && age < 18)
    return res.status(400).json({ error: "Age >=18" });

  next();
}

// Create User
app.post("/users", validateUser, async (req, res) => {
  try {
    const { name, email, password, age } = req.body;

    const { data: exist } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (exist) return res.status(400).json({ error: "Email exists" });

    const hashed = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from("users").insert([
      { name, email, password: hashed, age, role: "user" },
    ]);

    if (error) throw error;

    res.json({ message: "User created", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Users
app.get("/users", async (req, res) => {
  const { data } = await supabase.from("users").select("*");
  res.json(data);
});

// Get One User
app.get("/users/:id", async (req, res) => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("id", req.params.id)
    .single();

  if (!data) return res.json({ error: "Not found" });

  res.json(data);
});

// Update User
app.put("/users/:id", async (req, res) => {
  const { name, age, role } = req.body;

  const { data } = await supabase
    .from("users")
    .update({ name, age, role })
    .eq("id", req.params.id);

  res.json({ message: "Updated", data });
});

// Delete User
app.delete("/users/:id", async (req, res) => {
  await supabase.from("users").delete().eq("id", req.params.id);

  res.json({ message: "Deleted" });
});

// Server
app.listen(3000, () => {
  console.log("Server running on 3000");
});