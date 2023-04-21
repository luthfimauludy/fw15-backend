const partnersModel = require("../models/partners.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllPartners = async (req, res) => {
  try {
    const data = { ...req.query };
    const partner = await partnersModel.findAll(data);
    if (!partner) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "List of all partners",
      results: partner,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
