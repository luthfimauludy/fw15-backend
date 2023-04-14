const eventRouter = require("express").Router();
const eventController = require("../../controllers/admin/events.controller");
const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

eventRouter.get("/", eventController.getAllEvents);
eventRouter.get("/:id", eventController.getOneEvent);
eventRouter.post("/", uploadMiddleware("picture"), eventController.createEvent);
eventRouter.patch(
  "/:id",
  uploadMiddleware("picture"),
  eventController.updateEvent
);
eventRouter.delete("/:id", eventController.deleteEvent);

module.exports = eventRouter;
