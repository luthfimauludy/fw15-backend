const reservationSectionRouter = require("express").Router();
const reservationSectionController = require("../controllers/reservationSections.controller");

reservationSectionRouter.get("/", reservationSectionController.getAllSections);

module.exports = reservationSectionRouter;
