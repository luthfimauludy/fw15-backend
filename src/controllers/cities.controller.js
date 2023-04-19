const citiesModel = require("../models/cities.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllCities = async (req, res) => {
  try {
    const { id } = req.user;
    const city = await citiesModel.findAll(id);
    if (!city) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Cities",
      results: city,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
