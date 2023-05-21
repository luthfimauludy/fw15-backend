const reservationsModel = require("../models/reservations.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllHistory = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const histories = await reservationsModel.findAllByUserId(
      userId,
      req.query
    );
    if (!histories) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail histories",
      results: histories,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
