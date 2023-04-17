const userModel = require("../models/users.model");
const profileModel = require("../models/profile.model");
const forgotRequestModel = require("../models/forgotRequest.model");
const errorHandler = require("../helpers/errorHandler.helper");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = process.env;
const argon = require("argon2");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOneByEmail(email);
    if (!user) {
      throw Error("wrong_credentials");
    }
    const verify = await argon.verify(user.password, password);
    if (!verify) {
      throw Error("wrong_credentials");
    }
    const token = jwt.sign({ id: user.id }, APP_SECRET);
    return res.json({
      success: true,
      message: "Login success!",
      results: { token },
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.register = async (req, res) => {
  try {
    const { fullName, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      throw Error("password_unmatch");
    }
    const hash = await argon.hash(password);
    const data = {
      ...req.body,
      password: hash,
    };
    const user = await userModel.insert(data);
    const profileData = {
      fullName,
      userId: user.id,
    };
    await profileModel.insert(profileData);
    const token = jwt.sign({ id: user.id }, APP_SECRET);
    return res.json({
      success: true,
      message: "Register success!",
      results: { token },
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOneByEmail(email);
    if (!user) {
      throw Error("no_user");
    }
    const randomNumber = Math.random();
    const rounded = Math.round(randomNumber * 100000);
    const padded = String(rounded).padEnd(6, "0");
    const forgot = await forgotRequestModel.insert({
      email: user.email,
      code: padded,
    });
    if (!forgot) {
      throw Error("forgot_failed");
    }
    return res.json({
      success: true,
      message: "Request reset password success!",
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
