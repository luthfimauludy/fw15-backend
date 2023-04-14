const reservationSectionsModel = require("../models/reservationSections.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllReservationsSections = async (req, res) => {
  try {
    const data = await reservationSectionsModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all reservation sections",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneReservationSections = async (req, res) => {
  const data = await reservationSectionsModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail reservation section",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Reservation section is not found",
  });
};

exports.createReservationSections = async (req, res) => {
  try {
    const reservationSection = await reservationSectionsModel.insert(data);
    return res.json({
      success: true,
      message: `Create reservation section ${req.body.name} successfully`,
      results: reservationSection,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateReservationSections = async (req, res) => {
  try {
    const reservationSection = await reservationSectionsModel.update(
      req.params.id,
      data
    );
    return res.json({
      success: true,
      message: "Update reservation section successfully",
      results: reservationSection,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteReservationSections = async (req, res) => {
  try {
    const data = await reservationSectionsModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete reservation section successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
