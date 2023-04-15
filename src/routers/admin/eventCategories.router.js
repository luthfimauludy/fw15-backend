const eventCategoryRouter = require("express").Router();
const eventCategoryController = require("../../controllers/admin/eventCategories.controller");
const validate = require("../../middlewares/validator.middleware");
// const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

eventCategoryRouter.get(
  "/",
  validate("getAllEventCategories"),
  eventCategoryController.getAllEventCategories
);
eventCategoryRouter.get(
  "/:id",
  validate("idParams"),
  eventCategoryController.getOneEventCategory
);
eventCategoryRouter.post(
  "/",
  validate("createEventCategory"),
  eventCategoryController.createEventCategory
);
eventCategoryRouter.patch(
  "/:id",
  validate("idParams"),
  validate("createEventCategory"),
  eventCategoryController.updateEventCategory
);
eventCategoryRouter.delete(
  "/:id",
  validate("idParams"),
  eventCategoryController.deleteEventCategory
);

module.exports = eventCategoryRouter;
