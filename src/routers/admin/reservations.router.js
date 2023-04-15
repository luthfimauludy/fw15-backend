const reservationRouter = require("express").Router();
const reservationController = require("../../controllers/admin/reservations.controller");
const validate = require("../../middlewares/validator.middleware");

reservationRouter.get(
  "/",
  validate("getAllReservations"),
  reservationController.getAllReservations
);
reservationRouter.get(
  "/:id",
  validate("idParams"),
  reservationController.getOneReservation
);
reservationRouter.post(
  "/",
  validate("createReservation"),
  reservationController.createReservation
);
reservationRouter.patch(
  "/:id",
  validate("idParams"),
  validate("createReservation"),
  reservationController.updateReservation
);
reservationRouter.delete(
  "/:id",
  validate("idParams"),
  reservationController.deleteReservation
);

module.exports = reservationRouter;
