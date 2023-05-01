const reservationsModel = require("../models/reservations.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.createPayment = async (req, res) => {
  try {
    const { id } = req.user;
    const { reservationId, paymentMethodId } = req.body;
    const data = {
      ...req.body,
      userId: id,
      reservationId,
      paymentMethodId,
    };
    const payment = await reservationsModel.updateByUserId(id, data);
    if (!payment) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Create payment success!",
      results: payment,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
