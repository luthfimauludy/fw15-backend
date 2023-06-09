const profileModel = require("../models/profile.model");
const usersModel = require("../models/users.model");
// const fileRemover = require("../helpers/fileRemover.helper");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const profile = await profileModel.findOneByUserId(id);
    if (!profile) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail profile",
      results: profile,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await profileModel.findOneByUserId(id);
    const data = { ...req.body };
    if (req.file) {
      if (user.picture) {
        // fileRemover({ filename: user.picture });
      }
      console.log(req.file);
      // data.picture = req.file.filename;
      data.picture = req.file.path;
    }
    const profile = await profileModel.updateByUserId(id, data);
    if (!profile) {
      return errorHandler(res, undefined);
    }
    let updatedUser;
    if (data.email) {
      updatedUser = await usersModel.update(id, data);
    } else {
      updatedUser = await usersModel.findOne(id);
    }
    const results = {
      ...profile,
      email: updatedUser?.email,
    };
    return res.json({
      success: true,
      message: "Profile updated",
      results: results,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
