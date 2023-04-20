const citiesModel = require("../../models/cities.model");
const errorHandler = require("../../helpers/errorHandler.helper");
const fileRemover = require("../../helpers/fileRemover.helper");

exports.getAllCities = async (req, res) => {
  try {
    const data = { ...req.query };
    const city = await citiesModel.findAll(data);
    return res.json({
      success: true,
      message: "List of all cities",
      results: city,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneCity = async (req, res) => {
  try {
    const data = await citiesModel.findOne(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail city",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.createCity = async (req, res) => {
  try {
    const data = { ...req.body };
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
    const img = await citiesModel.findOne(req.params.id);
    const data = { ...req.body };
    if (req.file) {
      if (img.picture) {
        fileRemover({ filename: img.picture });
      }
      data.picture = req.file.filename;
    }
    const city = await citiesModel.update(req.params.id, data);
    if (!city) {
      return errorHandler(res, undefined);
    }
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
