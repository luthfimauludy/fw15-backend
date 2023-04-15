const paymentMethodRouter = require("express").Router();
const paymentMethodController = require("../../controllers/admin/paymentMethods.controller");
const validate = require("../../middlewares/validator.middleware");

paymentMethodRouter.get(
  "/",
  validate("getAllPaymentMethods"),
  paymentMethodController.getAllPaymentMethods
);
paymentMethodRouter.get(
  "/:id",
  validate("idParams"),
  paymentMethodController.getOnePaymentMethod
);
paymentMethodRouter.post(
  "/",
  validate("createPaymentMethod"),
  paymentMethodController.createPaymentMethod
);
paymentMethodRouter.patch(
  "/:id",
  validate("idParams"),
  validate("createPaymentMethod"),
  paymentMethodController.updatePaymentMethod
);
paymentMethodRouter.delete(
  "/:id",
  validate("idParams"),
  paymentMethodController.deletePaymentMethod
);

module.exports = paymentMethodRouter;
