const categoriesModel = require("../models/categories.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllCategories = async (req, res) => {
  try {
    const { id } = req.user;
    const category = await categoriesModel.findAll(id);
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
