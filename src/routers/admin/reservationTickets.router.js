const reservationTicketRouter = require("express").Router();
const reservationTicketController = require("../../controllers/admin/reservationTickets.controller");
// const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

reservationTicketRouter.get(
  "/",
  reservationTicketController.getAllReservationTickets
);
reservationTicketRouter.get(
  "/:id",
  reservationTicketController.getOneReservationTicket
);
reservationTicketRouter.post(
  "/",
  reservationTicketController.createReservationTicket
);
reservationTicketRouter.patch(
  "/:id",
  reservationTicketController.updateReservationTicket
);
reservationTicketRouter.delete(
  "/:id",
  reservationTicketController.deleteReservationTicket
);

module.exports = reservationTicketRouter;
