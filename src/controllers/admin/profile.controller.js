const profileModel = require("../../models/profile.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllProfiles = async (req, res) => {
  try {
    const data = await profileModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all profiles",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneProfile = async (req, res) => {
  const data = await profileModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail profile",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Profile is not found",
  });
};

exports.createProfile = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.picture = req.file.filename;
    }
    const profile = await profileModel.insert(data);
    return res.json({
      success: true,
      message: `Create profile ${req.body.fullName} successfully`,
      results: profile,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.picture = req.file.filename;
    }
    const profile = await profileModel.update(req.params.id, data);
    return res.json({
      success: true,
      message: "Update profile successfully",
      results: profile,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const data = await profileModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete profile successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
