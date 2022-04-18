// Require Router
const router = require("express").Router();

const { randomUUID } = require("crypto");
const req = require("express/lib/request");
const { json } = require("express/lib/response");

// Require file system
const fs = require("fs");
// Require path - this allows us to access to path
const path = require("path");

// Require file location of JSON file with note data
const notes = require("../../db/db.json");

// POST REQUEST #1 - RECEIVE NOTE DATA
// Then return the new note to the client
router.post("/notes", (req, res) => {
  // Set up the newNote object - this will have three properties:
  // ID
  // Title
  // Text
  var newNote = {
    // Sets ID to random UUID
    id: randomUUID(),

    // Sets title equal to req.body.title
    title: req.body.title,

    // Sets text equal to req.body.text

    text: req.body.text,
  };

  // Push newNote into the existing note JSON file - db.json
  notes.push(newNote);

  // TEST Notes //
  console.log("Your created note is:", notes);

  // Write the file to the db.json file
  fs.writeFileSync(
    // Specify the directory name for the note data
    path.join(__dirname, "../../db/db.json"),
    // Stringify the notes
    JSON.stringify(notes)
  );

  // Response with the JSON of newNotes
  res.json(newNote);
});

// GET REQUEST - READ NOTE DATA
// Get the existing note data
router.get("/notes", (req, res) => {
  // Set results equal to notes

  // Set response equal to JSON(results)
  res.sendFile(path.join(__dirname, "../../db/db.json"));
});

// EXTRA CREDIT //
router.delete("/notes/:id", (req, res) => {
  // Set a variable up to capture the deleted note id
  let deletedNote = req.params.id;
  // First - need to read all notes from the db.json file
  fs.readFile("../../db/db.json", (data) => {
    // Create a for loop to cycle through the length of existing notes
    for (let i = 0; i < notes.length; i++) {
      // Set up a conditional for if a note equals the id selected (?)
      if (notes[i].id === deletedNote) {
        console.log(`Deleted note: ${notes[i].id} successfully!`);
        // Splice the notes and remove ONE!
        notes.splice(i, 1);
      }
    }
    // Finally, re-write the notes to the db.json file
    fs.writeFile(
      path.join(__dirname, "../../db/db.json"),
      JSON.stringify(notes),
      (err) => {
        // Set up conditional if there's an error
        if (err) {
          // Console log the error
          console.log(err);
          // Send response of Status 500
          res.sendStatus(500);
          return;
        }

        // Send response that the note was deleted successfully
        res.send("Deleted note successfully!");
      }
    );
  });
});

// Export Router
module.exports = router;
