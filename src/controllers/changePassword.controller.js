const userModel = require("../models/users.model");
const errorHandler = require("../helpers/errorHandler.helper");
const argon = require("argon2");

const index = async (req, res) => {
  try {
    const { id } = req.user;
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const user = await userModel.findOne(id);
    const verify = await argon.verify(user.password, oldPassword);
    if (!verify) {
      throw Error("wrong_password");
    }
    if (newPassword !== confirmPassword) {
      throw Error("password_unmatch");
    }
    await userModel.update(id, {
      password: await argon.hash(newPassword),
    });
    return res.json({
      success: true,
      message: "Password has been changed!",
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

module.exports = index;
