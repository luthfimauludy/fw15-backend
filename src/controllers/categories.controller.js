const categoriesModel = require("../models/categories.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllCategories = async (req, res) => {
  try {
    const data = { ...req.query };
    const category = await categoriesModel.findAll(data);
    if (!category) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Categories",
      results: category,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
