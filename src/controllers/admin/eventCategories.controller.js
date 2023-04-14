const eventCategoriesModel = require("../../models/eventCategories.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllEventCategories = async (req, res) => {
  try {
    const data = await eventCategoriesModel.findAll(
      req.query.page,
      req.query.limit,
      req.query.search,
      req.query.sort,
      req.query.sortBy
    );
    return res.json({
      success: true,
      message: "List of all event categories",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneEventCategory = async (req, res) => {
  const data = await eventCategoriesModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail event category",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Event Category is not found",
  });
};

exports.createEventCategory = async (req, res) => {
  try {
    const data = { ...req.body };
    const eventCategory = await eventCategoriesModel.insert(data);
    return res.json({
      success: true,
      message: `Create event category successfully`,
      results: eventCategory,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateEventCategory = async (req, res) => {
  try {
    const data = { ...req.body };
    const eventCategory = await eventCategoriesModel.update(
      req.params.id,
      data
    );
    return res.json({
      success: true,
      message: "Update event category successfully",
      results: eventCategory,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteEventCategory = async (req, res) => {
  try {
    const data = await eventCategoriesModel.destroy(req.params.id);
    if (!data) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Delete event category successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
