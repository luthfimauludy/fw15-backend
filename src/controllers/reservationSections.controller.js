const errorHandler = require("../helpers/errorHandler.helper");
const reservationSectionModel = require("../models/reservationSections.model");

exports.getAllSections = async (req, res) => {
  try {
    const data = { ...req.query };
    const sections = await reservationSectionModel.findAll(data);
    return res.json({
      success: true,
      message: "List of all sections",
      results: sections,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
