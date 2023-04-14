const categoriesModel = require("../../models/categories.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllCategories = async (req, res) => {
  try {
    const data = { ...req.query };
    const category = await categoriesModel.findAll(data);
    return res.json({
      success: true,
      message: "List of all categories",
      results: category,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneCategory = async (req, res) => {
  try {
    const data = await categoriesModel.findOne(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail category",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.createCategory = async (req, res) => {
  try {
    const data = { ...req.body };
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
    const data = { ...req.body };
    const category = await categoriesModel.update(req.params.id, data);
    if (!category) {
      return errorHandler(res, undefined);
    }
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
