const reservationsModel = require("../models/reservations.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getHistory = async (req, res) => {
  try {
    const { id } = req.user;
    const history = await reservationsModel.findAllByUserId(id);
    if (!history) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail history",
      results: history,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
