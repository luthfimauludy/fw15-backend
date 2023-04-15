const reservationTicketRouter = require("express").Router();
const reservationTicketController = require("../../controllers/admin/reservationTickets.controller");
const validate = require("../../middlewares/validator.middleware");

reservationTicketRouter.get(
  "/",
  validate("getAllReservationTickets"),
  reservationTicketController.getAllReservationTickets
);
reservationTicketRouter.get(
  "/:id",
  validate("idParams"),
  reservationTicketController.getOneReservationTicket
);
reservationTicketRouter.post(
  "/",
  validate("createReservationTicket"),
  reservationTicketController.createReservationTicket
);
reservationTicketRouter.patch(
  "/:id",
  validate("idParams"),
  validate("createReservationTicket"),
  reservationTicketController.updateReservationTicket
);
reservationTicketRouter.delete(
  "/:id",
  validate("idParams"),
  reservationTicketController.deleteReservationTicket
);

module.exports = reservationTicketRouter;
