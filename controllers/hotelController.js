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
