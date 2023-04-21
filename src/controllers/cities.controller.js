const citiesModel = require("../models/cities.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllCities = async (req, res) => {
  try {
    const data = { ...req.query };
    const city = await citiesModel.findAll(data);
    if (!city) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "List of all cities",
      results: city,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
