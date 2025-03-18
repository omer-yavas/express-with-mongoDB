const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A hotel must have a name"],
    unique: true,
    trim: true,
  },
  location: {
    type: String,
    required: [true, "A hotel must have a location"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "A hotel must have a price"],
  },
  description: {
    type: String,
    required: [true, "A hotel must have a description"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//lets create a model out of the schema
const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
