const reservationsModel = require("../../models/reservations.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllReservations = async (req, res) => {
  try {
    const data = await reservationsModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all reservations",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneReservation = async (req, res) => {
  const data = await reservationsModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail reservation",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Reservation is not found",
  });
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