const paymentMethodsModel = require("../models/paymentMethods.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllPaymentMethods = async (req, res) => {
  try {
    const data = await paymentMethodsModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all payment methods",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOnePaymentMethod = async (req, res) => {
  const data = await paymentMethodsModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail payment method",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Payment method is not found",
  });
};

exports.createPaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await paymentMethodsModel.insert(data);
    return res.json({
      success: true,
      message: `Create payment method ${req.body.name} successfully`,
      results: paymentMethod,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updatePaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await paymentMethodsModel.update(req.params.id, data);
    return res.json({
      success: true,
      message: "Update payment method successfully",
      results: paymentMethod,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deletePaymentMethod = async (req, res) => {
  try {
    const data = await paymentMethodsModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete payment method successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
