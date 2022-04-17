// Require Router
const router = require("express").Router();

const { randomUUID } = require("crypto");
const req = require("express/lib/request");

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
  console.log("Your created note(s) are:", notes);

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
  console.log("Data from db.json has loaded to the page!");
});

// EXTRA CREDIT //
// TO DO: SET UP DELETE
// router.delete("/notes/id:", (req, res) => {
// First - need to read all notes from the db.json file
// res.sendFile(path.join(__dirname, "../../db/db.json"));
// Second - remove the note with the given id property
// var deletedNote = req.params.id
// if(deletedNote){res.json()}
// Third, re-write the notes to the db.json file
// });

// Export Router
module.exports = router;
