const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Temporary notes storage
let notes = [];

// GET - Display all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// POST - Create a new note
app.post("/notes", (req, res) => {
  const newNote = {
    id: Date.now(),
    text: req.body.text
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// DELETE - Delete a note
app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  notes = notes.filter(note => note.id !== id);

  res.json({ message: "Note deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});