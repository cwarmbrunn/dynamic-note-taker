// Require functions from index.js (from public folder)
// const { getNotes } = require("../../public/assets/js/index");
// Import Fetch
// Require Router
const router = require("express").Router();

const { contentType } = require("express/lib/response");
// Require path - this allows us to access to path
const path = require("path");

// Require file location of JSON file with note data
const { notes } = require("../../db/db.json");

// POST REQUEST #1 - RECEIVE NOTE DATA
// Then return the new note to the client
// Need to find a way to give each note a unique ID when it's saved
router.post("/notes", (notes) => {
  fetch("/notes", {
    // Set method to POST
    method: "POST",
    // Set Content-Type to application/json
    headers: { "Content-Type": "application/json" },
    // JSON.stringify the notes variable
    body: JSON.stringify(notes),
  });
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
