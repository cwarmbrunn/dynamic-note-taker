// API ROUTES
const apiRoutes = require("./routes/apiRoutes");

// HTML ROUTES
const htmlRoutes = require("./routes/htmlRoutes");

// Require file system
const fs = require("fs");
// Require Express
const express = require("express");
// Require path - this allows us to access to path
const path = require("path");


// Tell our app to use an environment variable
const PORT = process.env.PORT || 3001;
// SERVER SET UP (1/2)
// STEP #1 - Instantiate the server
const app = express();

// MIDDLEWARE
// These need to load before any of our HTML or other app information
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Needs to load after the express.urlencoded and express.json
// This provides a file path to a location in our application (in this case, the "public" folder).
// Then it instructs the server to make these files static resources.
// This means that all of our front-end code can now be accessed without having to create a specific endpoint for it.

app.use(express.static("public"));

// Set up app use for HTML and API Routes
app.use("/", htmlRoutes);

app.use("/api", apiRoutes);

// SERVER SET UP (2/2) - THIS MUST GO BELOW EXISTING ROUTES
// FINAL STEP  - Tell app to listen for requests
app.listen(PORT, () => {
  // App listens for PORT then console.log the following
  console.log(`API server now on port ${PORT} 🚀`);
});
