const reservationsModel = require("../models/reservations.model");
const reservationTicketsModel = require("../models/reservationTickets.model");
const eventsModel = require("../models/events.model");
const reservationSectionsModel = require("../models/reservationSections.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.createReservation = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const reservationData = {
      ...req.body,
      userId,
      statusId: 1,
    };
    const reservation = await reservationsModel.insert(reservationData);
    const reservationTicketData = {
      ...req.body,
      reservationId: reservation.id,
    };
    const section = await reservationSectionsModel.findOne(req.body.sectionId);

    await reservationTicketsModel.insert(reservationTicketData);

    return res.json({
      success: true,
      message: "Create reservation success!",
      results: {
        id: reservation.id,
        events: await eventsModel.findOneById(req.body.eventId),
        sectionName: section.name,
        quantity: req.body.quantity,
        pricePerTicket: section.price,
        totalPrice: parseInt(req.body.quantity) * section.price,
      },
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
