const eventRouter = require("express").Router();
const eventController = require("../controllers/events.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const uploadMiddleware = require("../middlewares/upload.middleware");

eventRouter.get("/", eventController.getAllEvents);
eventRouter.get("/:id", eventController.getOneEvent);
eventRouter.get("/manage", eventController.getDetailEventsByUserLogin);
eventRouter.post(
  "/manage",
  authMiddleware,
  uploadMiddleware("picture"),
  eventController.createManageEvent
);
eventRouter.patch(
  "/manage",
  authMiddleware,
  uploadMiddleware("picture"),
  eventController.updateManageEvent
);

module.exports = eventRouter;
