const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/home", (req, res) => {
  res.send("This is home page");
});

// Contact route
app.get("/contactus", (req, res) => {
  res.send("Contact us at contact@contact.com");
});
app.get("/about", (req, res) => {
  res.send({message:"welcome to the about page"});
});

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});