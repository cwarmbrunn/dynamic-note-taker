// Require functions from index.js (from public folder)
// const { getNotes } = require("../../public/assets/js/index");

// Require Router
const router = require("express").Router();

// Require path - this allows us to access to path
const path = require("path");

// Creating a route that the front-end can request data from - requiring the JSON file with note data
const { notes } = require("../../db/db.json");

// POST REQUEST #1 - RECEIVE NOTE DATA
// Then return the new note to the client
// Need to find a way to give each note a unique ID when it's saved
// router.post("/api/notes", (req, res) => {});

// GET REQUEST - READ NOTE DATA
// Get the existing note data
router.get("/notes", (req, res) => {
  // Set results equal to notes
  // let results = notes;
  // Set response equal to JSON(results)
  //   console.log(notes);
  console.log("Hello World!");
});
// Export Router
module.exports = router;
