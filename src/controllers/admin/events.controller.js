const eventsModel = require("../../models/events.model");
const errorHandler = require("../../helpers/errorHandler.helper");
const fileRemover = require("../../helpers/fileRemover.helper");

exports.getAllEvents = async (req, res) => {
  try {
    const data = { ...req.query };
    const event = await eventsModel.findAll(data);
    return res.json({
      success: true,
      message: "List of all events",
      results: event,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneEvent = async (req, res) => {
  try {
    const data = await eventsModel.findOne(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail event",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.createEvent = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.picture = req.file.filename;
    }
    const event = await eventsModel.insert(data);
    return res.json({
      success: true,
      message: `Create event ${req.body.title} successfully`,
      results: event,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const img = await eventsModel.findOne(req.params.id);
    const data = { ...req.body };
    if (req.file) {
      if (img.picture) {
        fileRemover({ filename: img.picture });
      }
      data.picture = req.file.filename;
    }
    const event = await eventsModel.update(req.params.id, data);
    if (!event) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Update event successfully",
      results: event,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const data = await eventsModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete event successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
