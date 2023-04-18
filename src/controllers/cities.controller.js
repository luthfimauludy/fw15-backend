const citiesModel = require("../models/cities.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getCity = async (req, res) => {
  try {
    const { name } = req.user;
    const city = await citiesModel.findOneByName(name);
    if (!city) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "City",
      results: city,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
