const reservationsModel = require("../../models/reservations.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllReservations = async (req, res) => {
  try {
    const data = { ...req.query };
    const reservation = await reservationsModel.findAll(data);
    return res.json({
      success: true,
      message: "List of all reservations",
      results: reservation,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneReservation = async (req, res) => {
  try {
    const data = await reservationsModel.findOne(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail reservation",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.createReservation = async (req, res) => {
  try {
    const data = { ...req.body };
    const reservation = await reservationsModel.insert(data);
    return res.json({
      success: true,
      message: `Create reservation successfully`,
      results: reservation,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const data = { ...req.body };
    const reservation = await reservationsModel.update(req.params.id, data);
    if (!reservation) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Update reservation successfully",
      results: reservation,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const data = await reservationsModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete reservation successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
