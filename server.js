// Require file system
const fs = require("fs");
// Require Express
const express = require("express");
// Require path - this allows us to access to path
const path = require("path");

// !! NEED TO CONFIRM !!
// Creating a route that the front-end can request data from - requiring the JSON file with note data
const { notes } = require("./data/notes.json");

// Tell our app to use an environment variable
const PORT = process.env.PORT || 3001;
// SERVER SET UP (1/2)
// STEP #1 - Instantiate the server
const app = express();

// MIDDLEWARE
// This provides a file path to a location in our application (in this case, the "public" folder).
// Then it instructs the server to make these files static resources.
// This means that all of our front-end code can now be accessed without having to create a specific endpoint for it.
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET REQUEST #1 - INDEX.HTML
// The goal is to get our index.html served from our Express.js server

// We start by using app.get - this is a GET request - then we use "/" to indicate the homepage (root route of the server)

// Then the req (request) and res (response) and an arrow function - we want this to respond by sending a file (index.html)
app.get("/", (req, res) => {
  // Tell the response where to find the file - directory name - index.html
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// GET REQUEST #2 - NOTES.HTML
// The goal is to get our notes.html served from our Express.js server

// We start by using app.get again - this is a GET request
// But this time, we want to use "/notes" to indicate the notes page

app.get("/public/notes.html", (req, res) => {
  // Tell the response where to find the file - directory name - notes.html
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// TEST //

// GET REQUEST #3  - Existing Notes TEST
app.get("/api/notes", (req, res) => {
  res.send("Hello World!");
});

// END TEST //

// GET REQUEST #4 - Wildcard Route
// This is for any route that the user types in that doesn't exist - e.g. "/magic" or "/api/cats"
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname), "./public/index.html");
});

// SERVER SET UP (2/2) - THIS MUST GO BELOW EXISTING ROUTES
// FINAL STEP  - Tell app to listen for requests
app.listen(PORT, () => {
  // App listens for PORT then console.log the following
  console.log(`API server now on port ${PORT} 🚀`);
});
