import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Helper function to read data
const readData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

// Helper function to write data
const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

// GET /students → Fetch all students
app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});

// POST /students → Add new student
app.post("/students", (req, res) => {
  const data = readData();

  const newStudent = {
    id: Date.now(),
    name: req.body.name,
    course: req.body.course,
    year: req.body.year
  };

  data.students.push(newStudent);
  writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// PUT /students/:id → Update student
app.put("/students/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  const student = data.students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = req.body.name || student.name;
  student.course = req.body.course || student.course;
  student.year = req.body.year || student.year;

  writeData(data);

  res.json({
    message: "Student updated successfully",
    student
  });
});

// DELETE /students/:id → Delete student
app.delete("/students/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  const index = data.students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students.splice(index, 1);
  writeData(data);

  res.json({ message: "Student deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});