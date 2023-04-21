const profileModel = require("../models/profile.model");
const fileRemover = require("../helpers/fileRemover.helper");
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
      message: "Profile",
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
        fileRemover({ filename: user.picture });
      }
      data.picture = req.file.filename;
    }
    const profile = await profileModel.updateByEmail(id, data);
    if (!profile) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Profile updated",
      results: profile,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
