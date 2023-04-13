const categoriesModel = require("../models/categories.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllCategories = async (req, res) => {
  try {
    const data = await categoriesModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all categories",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneCategory = async (req, res) => {
  const data = await categoriesModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail category",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Category is not found",
  });
};

exports.createCategory = async (req, res) => {
  try {
    const category = await categoriesModel.insert(data);
    return res.json({
      success: true,
      message: `Create category ${req.body.name} successfully`,
      results: category,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await categoriesModel.update(req.params.id, data);
    return res.json({
      success: true,
      message: "Update category successfully",
      results: category,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const data = await categoriesModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete category successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
