const reservationModel = require("../models/reservations.model");
const reservationSectionsModel = require("../models/reservationSections.model");
const reservationTicketsModel = require("../models/reservationTickets.model");
const eventsModel = require("../models/events.model");
const paymentMethodsModel = require("../models/paymentMethods.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getAllPayment = async (req, res) => {
  const data = { ...req.query };
  const methodData = await paymentMethodsModel.findAll(data);
  return res.json({
    success: true,
    message: "List of all method data",
    results: methodData,
  });
};

exports.createPayment = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const reservation = await reservationModel.findOne(req.body.reservationId);
    if (reservation.userId !== userId) {
      throw Error("data_mismatch");
    }
    const update = await reservationModel.update(req.body.reservationId, {
      paymentMethodId: req.body.paymentMethodId,
      statusId: 2,
    });
    const ticket = await reservationTicketsModel.findOneByReservationId(
      update.id
    );

    const section = await reservationSectionsModel.findOne(ticket.sectionId);

    return res.json({
      success: true,
      message: "Payment success!",
      results: {
        id: reservation.id,
        events: await eventsModel.findOneById(update.eventId),
        sectionName: section.name,
        quantity: ticket.quantity,
        pricePerTicket: section.price,
        totalPrice: parseInt(ticket.quantity) * section.price,
      },
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
