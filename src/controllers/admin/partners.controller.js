const partnersModel = require("../../models/partners.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllPartners = async (req, res) => {
  try {
    const data = await partnersModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all partners",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOnePartner = async (req, res) => {
  const data = await partnersModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail partner",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Partner is not found",
  });
};

exports.createPartner = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.picture = req.file.filename;
    }
    const partner = await partnersModel.insert(data);
    return res.json({
      success: true,
      message: `Create partner ${req.body.name} successfully`,
      results: partner,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updatePartner = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.picture = req.file.filename;
    }
    const partner = await partnersModel.update(req.params.id, data);
    return res.json({
      success: true,
      message: "Update partner successfully",
      results: partner,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deletePartner = async (req, res) => {
  try {
    const data = await partnersModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete partner successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
