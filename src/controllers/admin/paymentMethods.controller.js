const paymentMethodsModel = require("../../models/paymentMethods.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllPaymentMethods = async (req, res) => {
  try {
    const data = { ...req.query };
    const paymentMethod = await paymentMethodsModel.findAll(data);
    return res.json({
      success: true,
      message: "List of all payment methods",
      results: paymentMethod,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOnePaymentMethod = async (req, res) => {
  try {
    const data = await paymentMethodsModel.findOne(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail payment method",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.createPaymentMethod = async (req, res) => {
  try {
    const data = { ...req.body };
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
    const data = { ...req.body };
    const paymentMethod = await paymentMethodsModel.update(req.params.id, data);
    if (!paymentMethod) {
      return errorHandler(res, undefined);
    }
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
