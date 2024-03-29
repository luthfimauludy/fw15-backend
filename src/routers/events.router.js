const eventRouter = require("express").Router();
const eventController = require("../controllers/events.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const uploadMiddleware = require("../middlewares/upload.middleware");

eventRouter.get("/", eventController.getAllEvents);
eventRouter.get(
  "/manage",
  authMiddleware,
  eventController.getDetailEventsByUserLogin
);
eventRouter.post(
  "/manage",
  authMiddleware,
  uploadMiddleware("picture"),
  eventController.createManageEvent
);
eventRouter.patch(
  "/manage/:id",
  authMiddleware,
  uploadMiddleware("picture"),
  eventController.updateManageEvent
);
eventRouter.delete(
  "/manage/:id",
  authMiddleware,
  eventController.deleteManageEvent
);
eventRouter.get("/:id", eventController.getOneEvent);

module.exports = eventRouter;
