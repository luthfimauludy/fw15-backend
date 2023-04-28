const reservationsModel = require("../models/reservations.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.createReservation = async (req, res) => {
  try {
    const data = { ...req.body };
    const reservation = await reservationsModel.insert(data);
    return res.json({
      success: true,
      message: "Reservation created",
      results: reservation,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
