const express = require("express");
const app = express();
const hotelRouter = require("./routes/hotelRoutes");

// Middleware to parse JSON
app.use(express.json());

//  ROUTES
app.use("/api/v1/hotels", hotelRouter);

module.exports = app;
