const citiesModel = require("../models/cities.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllCities = async (req, res) => {
  try {
    const data = await citiesModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all cities",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneCity = async (req, res) => {
  const data = await citiesModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail city",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: City is not found",
  });
};

exports.createCity = async (req, res) => {
  try {
    if (req.file) {
      data.picture = req.file.filename;
    }
    const city = await citiesModel.insert(data);
    return res.json({
      success: true,
      message: `Create city ${req.body.name} successfully`,
      results: city,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateCity = async (req, res) => {
  try {
    if (req.file) {
      data.picture = req.file.filename;
    }
    const city = await citiesModel.update(req.params.id, data);
    return res.json({
      success: true,
      message: "Update city successfully",
      results: city,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteCity = async (req, res) => {
  try {
    const data = await citiesModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete city successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
