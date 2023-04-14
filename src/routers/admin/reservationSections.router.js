const reservationSectionRouter = require("express").Router();
const reservationSectionController = require("../../controllers/admin/reservationSections.controller");
// const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

reservationSectionRouter.get(
  "/",
  reservationSectionController.getAllReservationSections
);
reservationSectionRouter.get(
  "/:id",
  reservationSectionController.getOneReservationSection
);
reservationSectionRouter.post(
  "/",
  reservationSectionController.createReservationSection
);
reservationSectionRouter.patch(
  "/:id",
  reservationSectionController.updateReservationSection
);
reservationSectionRouter.delete(
  "/:id",
  reservationSectionController.deleteReservationSection
);

module.exports = reservationSectionRouter;
