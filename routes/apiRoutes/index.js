// Require Router
const router = require("express").Router();

const { randomUUID } = require("crypto");
const req = require("express/lib/request");

// Require file system
const fs = require("fs");
// Require path - this allows us to access to path
const path = require("path");

// Require file location of JSON file with note data
const { notes } = require("../../db/db.json");

// POST REQUEST #1 - RECEIVE NOTE DATA
// Then return the new note to the client
// Need to find a way to give each note a unique ID when it's saved
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

  // TEST //
  console.log(notes);

  //See if we can add our new note to the db.json file.

  //To do this we will want to .push our new note into an array containing all notes and then
  //use fs to write our notes from our array to the db.json file

  //After that is done, we want to use res.json to send the new note back to the client

  // Write the file to the db.json file
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );

  // Response with the JSON of newNotes
  res.json(newNotes);
});

// GET REQUEST - READ NOTE DATA
// Get the existing note data
router.get("/notes", (req, res) => {
  // Set results equal to notes

  // Set response equal to JSON(results)
  res.sendFile(path.join(__dirname, "../../db/db.json"));
  console.log("Data from db.json has loaded to the page!");
});
// Export Router
module.exports = router;
