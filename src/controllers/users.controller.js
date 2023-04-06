const userModel = require("../models/users.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllUsers = async (req, res) => {
  const data = await userModel.findAll();
  return res.json({
    success: true,
    message: "List of all users",
    results: data,
  });
};

exports.getOneUser = async (req, res) => {
  const data = await userModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail user",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: User not found",
  });
};

exports.createUser = async (req, res) => {
  try {
    const data = await userModel.insert(req.body);
    return res.json({
      success: true,
      message: `Create user ${req.body.email} successfully`,
      results: data,
    });
  } catch (err) {
    return errorHandler(req, res, err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const data = await userModel.update(req.params.id, req.body);
    return res.json({
      success: true,
      message: "Update user successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteUser = async (req, res) => {
  const data = await userModel.destroy(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Delete user successfully",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: User not found",
  });
};
