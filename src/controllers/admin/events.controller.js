const eventsModel = require("../../models/events.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllEvents = async (req, res) => {
  try {
    const data = await eventsModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all events",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneEvent = async (req, res) => {
  const data = await eventsModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail event",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Event is not found",
  });
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
    const data = { ...req.body };
    if (req.file) {
      data.picture = req.file.filename;
    }
    const event = await eventsModel.update(req.params.id, data);
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
