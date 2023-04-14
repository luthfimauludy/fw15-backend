const reservationRouter = require("express").Router();
const reservationController = require("../../controllers/admin/reservations.controller");
// const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

reservationRouter.get("/", reservationController.getAllReservations);
reservationRouter.get("/:id", reservationController.getOneReservation);
reservationRouter.post("/", reservationController.createReservation);
reservationRouter.patch("/:id", reservationController.updateReservation);
reservationRouter.delete("/:id", reservationController.deleteReservation);

module.exports = reservationRouter;
