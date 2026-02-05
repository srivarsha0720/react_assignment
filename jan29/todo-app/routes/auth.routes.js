const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const supabase = require("../config/supabase");

const router = express.Router();

/* SIGNUP */
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const { error } = await supabase.from("usser").insert([
    {
      name,
      email,
      password: hash
    }
  ]);

  if (error) return res.status(400).json(error);

  res.json({ message: "Signup Success" });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data } = await supabase
    .from("usser")
    .select("*")
    .eq("email", email)
    .single();

  if (!data) return res.status(404).json("User not found");

  const match = await bcrypt.compare(password, data.password);

  if (!match) return res.status(401).json("Wrong password");

  const token = jwt.sign(
    { usserId: data.id, email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;