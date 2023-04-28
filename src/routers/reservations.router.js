const reservationsRouter = require("express").Router();
const reservationsController = require("../controllers/reservations.controller");

reservationsRouter.post("/", reservationsController.createReservation);

module.exports = reservationsRouter;
