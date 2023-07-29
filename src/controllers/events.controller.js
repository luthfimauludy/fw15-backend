const eventCategoriesModel = require("../models/eventCategories.model");
const citiesModel = require("../models/cities.model");
const categoriesModel = require("../models/categories.model");
const eventsModel = require("../models/events.model");
const deviceTokenModel = require("../models/deviceToken.model");
const errorHandler = require("../helpers/errorHandler.helper");
const admin = require("../helpers/firebase");

exports.getAllEvents = async (req, res) => {
  try {
    const data = { ...req.query };
    const { rows: results, pageInfo } = await eventsModel.findAllByUserLogin(
      data
    );
    return res.json({
      success: true,
      message: "List of all events",
      results,
      pageInfo,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneEvent = async (req, res) => {
  try {
    const data = await eventsModel.findOneById(req.params.id);
    if (!data) {
      throw Error("data_not_found");
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
    const { id } = req.user;
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
    if (!id) {
      return errorHandler(res, undefined);
    }

    const data = {
      ...req.body,
      createdBy: id,
    };

    if (data.cityId) {
      const city = await citiesModel.findOne(data.cityId);
      if (!city) {
        throw Error("data_not_found");
      }
    }

    if (data.categoryId) {
      const category = await categoriesModel.findOne(data.categoryId);
      if (!category) {
        throw Error("data_not_found");
      }
    }

    if (req.file) {
      data.picture = req.file.path;
    }
    const event = await eventsModel.insert(data);
    const eventCategoriesData = {
      eventId: event.id,
      categoryId: data.categoryId,
    };
    await eventCategoriesModel.insert(eventCategoriesData);

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
    if (!id) {
      return errorHandler(res, undefined);
    }

    const checkEvent = await eventsModel.findOne(req.params.id);
    if (!checkEvent) {
      throw Error("data_not_found");
    }

    if (id !== checkEvent.createdBy) {
      throw Error("event_not_created_by_you");
    }

    const data = {
      ...req.body,
      createdBy: id,
    };

    if (data.cityId) {
      const checkCity = await citiesModel.findOne(data.cityId);
      if (!checkCity) {
        throw Error("data_not_found");
      }
    }

    if (data.categoryId) {
      const checkCategory = await categoriesModel.findOne(data.categoryId);
      if (!checkCategory) {
        throw Error("data_not_found");
      }
    }

    if (req.file) {
      if (checkEvent.picture) {
        // fileRemover({ filename: user.picture });
      }
      // data.picture = req.file.filename;
      data.picture = req.file.path;
    }
    const event = await eventsModel.update(req.params.id, data);

    const eventCategoryData = {
      categoryId: data.categoryId,
    };
    await eventCategoriesModel.updateByEventId(event.id, eventCategoryData);

    return res.json({
      success: true,
      message: "Update event successfully!",
      results: event,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteManageEvent = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id) {
      return errorHandler(res, undefined);
    }

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
