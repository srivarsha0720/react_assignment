const fs = require("fs");

const uniqueEmail = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync("./src/db.json", "utf-8"));

  const exists = data.users.find(
    user => user.email === req.body.email
  );

  if (exists) {
    return res.status(409).json({
      error: "Email already exists"
    });
  }

  next();
};

module.exports = uniqueEmail;