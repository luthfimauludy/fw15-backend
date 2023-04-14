const reservationStatusRouter = require("express").Router();
const reservationStatusController = require("../../controllers/admin/reservationStatus.controller");
// const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

reservationStatusRouter.get(
  "/",
  reservationStatusController.getAllReservationStatus
);
reservationStatusRouter.get(
  "/:id",
  reservationStatusController.getOneReservationStatus
);
reservationStatusRouter.post(
  "/",
  reservationStatusController.createReservationStatus
);
reservationStatusRouter.patch(
  "/:id",
  reservationStatusController.updateReservationStatus
);
reservationStatusRouter.delete(
  "/:id",
  reservationStatusController.deleteReservationStatus
);

module.exports = reservationStatusRouter;
