const eventCategoriesModel = require("../models/eventCategories.model");
const eventsModel = require("../models/events.model");
const errorHandler = require("../helpers/errorHandler.helper");

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
    const event = await eventCategoriesModel.findOneByEventId(req.params.id);
    if (!event) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Event",
      results: event,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.createManageEvent = async (req, res) => {
  try {
    const { id } = req.user;
    const data = {
      ...req.body,
      createdBy: id,
    };
    if (req.file) {
      data.picture = req.file.filename;
    }
    const event = await eventsModel.insert(data);
    return res.json({
      success: true,
      message: "Create event successfully!",
      results: event,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
