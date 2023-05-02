const eventRouter = require("express").Router();
const eventController = require("../controllers/events.controller");
const uploadMiddleware = require("../middlewares/upload.middleware");

eventRouter.get("/", eventController.getAllEvents);
eventRouter.get("/:id", eventController.getOneEvent);
eventRouter.post(
  "/manage",
  uploadMiddleware("picture"),
  eventController.createManageEvent
);
eventRouter.patch(
  "/manage",
  uploadMiddleware("picture"),
  eventController.updateManageEvent
);

module.exports = eventRouter;
