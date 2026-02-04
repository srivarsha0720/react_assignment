const supabase = require("../config/supabase");
const bcrypt = require("bcrypt");

// ================= SIGNUP =================
exports.signup = async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check existing user
    const { data: oldUser } = await supabase
      .from("userr")
      .select("*")
      .eq("email", email)
      .single();

    if (oldUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const { error } = await supabase.from("userr").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword,
      },
    ]);

    if (error) throw error;

    res.json({
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ================= PROFILE =================
exports.getProfile = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        message: "Name is required",
      });
    }

    const { data, error } = await supabase
      .from("userr")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (error || !data) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};