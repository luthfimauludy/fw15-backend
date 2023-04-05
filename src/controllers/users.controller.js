const userModel = require("../models/users.model");

exports.getAllUsers = async (req, res) => {
  const data = await userModel.findAll();
  return res.json({
    success: true,
    message: "List of all users",
    results: data,
  });
};

exports.createUser = (req, res) => {
  return res.json({
    success: true,
    message: `Create user ${req.body.fullName} successfully`,
  });
};

exports.updateUser = (req, res) => {
  return res.json({
    success: true,
    message: `Update user ${req.params.id} successfully`,
  });
};

exports.deleteUser = (req, res) => {
  return res.json({
    success: true,
    message: `Delete user ${req.params.id} successfully`,
  });
};
