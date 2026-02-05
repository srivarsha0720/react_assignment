const express = require("express");
const supabase = require("../config/supabase");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

/* CREATE TODO */
router.post("/", auth, async (req, res) => {
  const { title } = req.body;

  const { error } = await supabase.from("todos").insert([
    {
      title,
      usserId: req.usser.usserId
    }
  ]);

  if (error) return res.status(400).json(error);

  res.json("Todo Added");
});

/* GET TODOS */
router.get("/", auth, async (req, res) => {
  const { data } = await supabase
    .from("todos")
    .select("*")
    .eq("usserId", req.usser.usserId);

  res.json(data);
});

/* UPDATE TODO */
router.put("/:id", auth, async (req, res) => {
  const { title, completed } = req.body;

  await supabase
    .from("todos")
    .update({ title, completed })
    .eq("id", req.params.id)
    .eq("usserId", req.usser.usserId);

  res.json("Updated");
});

/* DELETE TODO */
router.delete("/:id", auth, async (req, res) => {
  await supabase
    .from("todos")
    .delete()
    .eq("id", req.params.id)
    .eq("usserId", req.usser.usserId);

  res.json("Deleted");
});

module.exports = router;