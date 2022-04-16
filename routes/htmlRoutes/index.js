// Require Router
const router = require("express").Router();

// Require path - this allows us to access to path
const path = require("path");

// HTML GET REQUEST #1 - NOTES.HTML
// The goal is to get our notes.html served from our Express.js server

// We start by using router.get again - this is a GET request
// But this time, we want to use "/notes" to indicate the notes page

router.get("/notes", (req, res) => {
  // Tell the response where to find the file - directory name - notes.html
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// HTML GET REQUEST #2 - Wildcard Route
// This is for any route that the user types in that doesn't exist - e.g. "/magic" or "/api/cats"
// Must go at bottom - overrides all other pathing!
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// Export Router
module.exports = router;
