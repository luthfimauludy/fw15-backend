const eventRouter = require("express").Router();
const eventController = require("../../controllers/admin/events.controller");
const uploadMiddleware = require("../../middlewares/upload.middleware");
const validate = require("../../middlewares/validator.middleware");

eventRouter.get("/", validate("getAllEvents"), eventController.getAllEvents);
eventRouter.get("/:id", validate("idParams"), eventController.getOneEvent);
eventRouter.post(
  "/",
  uploadMiddleware("picture"),
  validate("createEvent"),
  eventController.createEvent
);
eventRouter.patch(
  "/:id",
  validate("idParams"),
  uploadMiddleware("picture"),
  validate("createEvent"),
  eventController.updateEvent
);
eventRouter.delete("/:id", validate("idParams"), eventController.deleteEvent);

module.exports = eventRouter;
