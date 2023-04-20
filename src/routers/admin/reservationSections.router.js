const reservationSectionRouter = require("express").Router();
const reservationSectionController = require("../../controllers/admin/reservationSections.controller");
const validate = require("../../middlewares/validator.middleware");

reservationSectionRouter.get(
  "/",
  validate("getAllReservationSections"),
  reservationSectionController.getAllReservationSections
);
reservationSectionRouter.get(
  "/:id",
  validate("idParams"),
  reservationSectionController.getOneReservationSection
);
reservationSectionRouter.post(
  "/",
  validate("createReservationSection"),
  reservationSectionController.createReservationSection
);
reservationSectionRouter.patch(
  "/:id",
  validate("idParams"),
  validate("updateReservationSection"),
  reservationSectionController.updateReservationSection
);
reservationSectionRouter.delete(
  "/:id",
  validate("idParams"),
  reservationSectionController.deleteReservationSection
);

module.exports = reservationSectionRouter;
