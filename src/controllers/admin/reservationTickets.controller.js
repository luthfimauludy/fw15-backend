const reservationTicketsModel = require("../models/reservationTickets.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllReservationsTickets = async (req, res) => {
  try {
    const data = await reservationTicketsModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all reservation tickets",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneReservationTickets = async (req, res) => {
  const data = await reservationTicketsModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail reservation ticket",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Reservation ticket is not found",
  });
};

exports.createReservationTickets = async (req, res) => {
  try {
    const reservationTickets = await reservationTicketsModel.insert(data);
    return res.json({
      success: true,
      message: `Create reservation ticket ${req.body.reservationId} successfully`,
      results: reservationTickets,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateReservationTickets = async (req, res) => {
  try {
    const reservationTickets = await reservationTicketsModel.update(
      req.params.id,
      data
    );
    return res.json({
      success: true,
      message: "Update reservation ticket successfully",
      results: reservationTickets,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteReservationTickets = async (req, res) => {
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
