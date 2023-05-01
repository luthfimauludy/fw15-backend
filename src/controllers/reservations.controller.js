const reservationsModel = require("../models/reservations.model");
const reservationTicketsModel = require("../models/reservationTickets.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.createReservation = async (req, res) => {
  try {
    const { id } = req.user;
    const { eventId, sectionId, quantity } = req.body;
    const reservationData = {
      eventId,
      userId: id,
      statusId: 1,
    };
    const reservation = await reservationsModel.insert(reservationData);
    const reservationTicketData = {
      reservationId: reservation.id,
      sectionId,
      quantity,
    };
    await reservationTicketsModel.insert(reservationTicketData);
    return res.json({
      success: true,
      message: "Create reservation success!",
      results: reservation,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
