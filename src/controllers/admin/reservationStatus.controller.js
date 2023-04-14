const reservationStatusModel = require("../../models/reservationStatus.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllReservationStatus = async (req, res) => {
  try {
    const data = await reservationStatusModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all reservation status",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneReservationStatus = async (req, res) => {
  const data = await reservationStatusModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail reservation status",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Reservation status is not found",
  });
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
