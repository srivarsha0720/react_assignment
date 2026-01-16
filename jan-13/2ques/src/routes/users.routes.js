const express = require("express");
const fs = require("fs");
const cloudinary = require("../config/cloudinary.config");
const upload = require("../middleware/upload.middleware");
const uniqueEmail = require("../middleware/uniqueEmail.middleware");

const router = express.Router();

const readDB = () =>
  JSON.parse(fs.readFileSync("./src/db.json", "utf-8"));

const writeDB = (data) =>
  fs.writeFileSync("./src/db.json", JSON.stringify(data, null, 2));

router.post(
  "/signup",
  upload.single("profile"),
  uniqueEmail,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Profile image is required" });
      }

      const result = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      );

      const data = readDB();

      const newUser = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profilePic: result.secure_url,
      };

      data.users.push(newUser);
      writeDB(data);

      res.status(201).json({
        message: "User registered successfully",
        user: newUser,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;