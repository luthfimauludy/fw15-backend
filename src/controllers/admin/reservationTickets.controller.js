const reservationTicketsModel = require("../../models/reservationTickets.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllReservationTickets = async (req, res) => {
  try {
    const data = { ...req.query };
    const reservationTicket = await reservationTicketsModel.findAll(data);
    return res.json({
      success: true,
      message: "List of all reservation tickets",
      results: reservationTicket,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneReservationTicket = async (req, res) => {
  try {
    const data = await reservationTicketsModel.findOne(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail reservation ticket",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.createReservationTicket = async (req, res) => {
  try {
    const data = { ...req.body };
    const reservationTicket = await reservationTicketsModel.insert(data);
    return res.json({
      success: true,
      message: `Create reservation ticket successfully`,
      results: reservationTicket,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateReservationTicket = async (req, res) => {
  try {
    const data = { ...req.body };
    const reservationTicket = await reservationTicketsModel.update(
      req.params.id,
      data
    );
    if (!reservationTicket) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Update reservation ticket successfully",
      results: reservationTicket,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteReservationTicket = async (req, res) => {
  try {
    const data = await reservationTicketsModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete reservation ticket successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
