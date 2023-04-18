const admin = require("express").Router();

admin.use("/users", require("./users.router"));
admin.use("/categories", require("./categories.router"));
admin.use("/cities", require("./cities.router"));
admin.use("/event-categories", require("./eventCategories.router"));
admin.use("/events", require("./events.router"));
admin.use("/partners", require("./partners.router"));
admin.use("/payment-methods", require("./paymentMethods.router"));
admin.use("/profile", require("./profile.router"));
admin.use("/reservations", require("./reservations.router"));
admin.use("/reservation-sections", require("./reservationSections.router"));
admin.use("/reservation-status", require("./reservationStatus.router"));
admin.use("/reservation-tickets", require("./reservationTickets.router"));
admin.use("/wishlists", require("./wishlists.router"));

module.exports = admin;
