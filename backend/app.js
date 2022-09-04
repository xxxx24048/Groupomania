// Installations
const express = require('express');
const path = require('path');

// Routes
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/usersRoutes");

// Appel fonction express
const app = express();

// Headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use('/api/article', postRoutes);
app.use('/api/auth', userRoutes);

// Export
module.exports = app;