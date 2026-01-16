const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");

const dbPath = path.join(__dirname, "../db.json");

// Helper function
const readDB = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));
const writeDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

/* CREATE USER */
router.post("/add", (req, res) => {
  const db = readDB();
  const newUser = { ...req.body, userId: Date.now() };
  db.users.push(newUser);
  writeDB(db);
  res.status(201).json(newUser);
});

/* GET ALL USERS */
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.users);
});

/* GET SINGLE USER */
router.get("/:userId", (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.userId == req.params.userId);
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json(user);
});

/* UPDATE USER */
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(u => u.userId == req.params.userId);
  if (index === -1) return res.status(404).json({ msg: "User not found" });

  db.users[index] = { ...db.users[index], ...req.body };
  writeDB(db);
  res.json(db.users[index]);
});

/* DELETE USER */
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  db.users = db.users.filter(u => u.userId != req.params.userId);
  writeDB(db);
  res.json({ msg: "User deleted" });
});

module.exports = router;