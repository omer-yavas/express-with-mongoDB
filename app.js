const express = require("express");
const app = express();
const port = 3000;

const hotelRouter = require("./routes/hotelRoutes");
//  ROUTES
app.use("/api/v1/hotels", hotelRouter);

module.exports = app;
