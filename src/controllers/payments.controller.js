const reservationTicketsModel = require("../models/reservationTickets.model");
const paymentMethodsModel = require("../models/paymentMethods.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.createPayment = async (req, res) => {
  try {
    const { reservationId, paymentMethodId } = req.body;
    const payment = await reservationTicketsModel.insert(reservationId);
    await paymentMethodsModel.insert(paymentMethodId);
    return res.json({
      success: true,
      message: "Create payment success!",
      results: payment,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
