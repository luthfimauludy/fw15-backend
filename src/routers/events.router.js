const eventRouter = require("express").Router();
const eventController = require("../controllers/events.controller");

eventRouter.get("/", eventController.getAllEvents);
eventRouter.get("/:id", eventController.getOneEvent);

module.exports = eventRouter;
