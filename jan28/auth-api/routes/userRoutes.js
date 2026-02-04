const express = require("express");
const router = express.Router();

const {
  signup,
  getProfile,
} = require("../controllers/userController");

// Routes
router.post("/signup", signup);
router.get("/myprofile", getProfile);

module.exports = router;