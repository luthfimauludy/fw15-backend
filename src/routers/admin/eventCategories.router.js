const eventCategoryRouter = require("express").Router();
const eventCategoryController = require("../../controllers/admin/eventCategories.controller");
// const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

eventCategoryRouter.get("/", eventCategoryController.getAllEventCategories);
eventCategoryRouter.get("/:id", eventCategoryController.getOneEventCategory);
eventCategoryRouter.post("/", eventCategoryController.createEventCategory);
eventCategoryRouter.patch("/:id", eventCategoryController.updateEventCategory);
eventCategoryRouter.delete("/:id", eventCategoryController.deleteEventCategory);

module.exports = eventCategoryRouter;
