// Require Express
const express = require("express");

// Tell our app to use a n environment variable
const PORT = process.env.PORT || 3001;

// SERVER SET UP:
// STEP #1 - Instantiate the server
const app = express();

// GET REQUEST #1
// The goal is to get our index.html served from our Express.js server

// We start by using app.get - this is a GET request - then we use "/" to indicate the homepage (root route of the server)

// Then the req (request) and res (response) and an arrow function - we want this to respond by sending a file (index.html)
app.get("/", (req, res) => {
  // Tell the response where to find the file - directory name - index.html
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// SERVER SET UP - THIS MUST GO BELOW EXISTING ROUTES
// STEP #2 - Tell app to listen for requests
app.listen(PORT, () => {
  // App listens for PORT then console.log the following
  console.log(`API server now on port ${PORT} 🚀`);
});
