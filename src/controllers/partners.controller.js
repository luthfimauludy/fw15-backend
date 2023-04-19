const partnersModel = require("../models/partners.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllPartners = async (req, res) => {
  try {
    const { id } = req.user;
    const partner = await partnersModel.findAll(id);
    if (!partner) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Partners",
      results: partner,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
