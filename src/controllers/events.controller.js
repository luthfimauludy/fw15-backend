const eventCategoriesModel = require("../models/eventCategories.model");
const eventsModel = require("../models/events.model");
const deviceTokenModel = require("../models/deviceToken.model");
const errorHandler = require("../helpers/errorHandler.helper");
const admin = require("../helpers/firebase");

exports.getAllEvents = async (req, res) => {
  try {
    const data = { ...req.query };
    const events = await eventsModel.findAllByUserLogin(data);
    return res.json({
      success: true,
      message: "List of all events",
      results: events,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneEvent = async (req, res) => {
  try {
    const data = await eventsModel.findOneById(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Event",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getDetailEventsByUserLogin = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventsModel.findEventsByUserLogin(id);
    return res.json({
      success: true,
      message: "List of all user events",
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
      data.picture = req.file.path;
    }
    const event = await eventsModel.insert(data);

    const listToken = await deviceTokenModel.findAll(1, 1000);
    const message = listToken.map((item) => ({
      token: item.token,
      notification: {
        title: "There is new event!",
        body: `${req.body.title} will be held at ${req.body.date}, check it out!`,
      },
    }));

    const messaging = admin.messaging();
    messaging.sendEach(message);
    return res.json({
      success: true,
      message: "Create event successfully!",
      results: event,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateManageEvent = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await eventsModel.findOneById(id);
    const data = { ...req.body };
    if (req.file) {
      if (user.picture) {
        // fileRemover({ filename: user.picture });
      }
      // data.picture = req.file.filename;
      data.picture = req.file.path;
    }
    const event = await eventsModel.update(req.params.id, data);
    if (!event) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Update event successfully!",
      results: event,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
