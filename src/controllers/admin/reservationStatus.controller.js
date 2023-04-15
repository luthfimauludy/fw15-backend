const reservationStatusModel = require("../../models/reservationStatus.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllReservationStatus = async (req, res) => {
  try {
    const data = { ...req.query };
    const reservationStatus = await reservationStatusModel.findAll(data);
    return res.json({
      success: true,
      message: "List of all reservation status",
      results: reservationStatus,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneReservationStatus = async (req, res) => {
  try {
    const data = await reservationStatusModel.findOne(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail reservation status",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.createReservationStatus = async (req, res) => {
  try {
    const data = { ...req.body };
    const reservationStatus = await reservationStatusModel.insert(data);
    return res.json({
      success: true,
      message: `Create reservation status ${req.body.name} successfully`,
      results: reservationStatus,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateReservationStatus = async (req, res) => {
  try {
    const data = { ...req.body };
    const reservationStatus = await reservationStatusModel.update(
      req.params.id,
      data
    );
    if (!reservationStatus) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Update reservation status successfully",
      results: reservationStatus,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteReservationStatus = async (req, res) => {
  try {
    const data = await reservationStatusModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete reservation status successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
