const Hotel = require("../models/hotelModel");

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    //SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: hotels.length,
      data: {
        hotels,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createHotel = async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        hotel: newHotel,
      },
    });
  } catch (err) {
    console.error(err);

    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        hotel,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
