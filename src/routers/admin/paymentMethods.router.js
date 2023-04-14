const paymentMethodRouter = require("express").Router();
const paymentMethodController = require("../../controllers/admin/paymentMethods.controller");
// const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

paymentMethodRouter.get("/", paymentMethodController.getAllPaymentMethods);
paymentMethodRouter.get("/:id", paymentMethodController.getOnePaymentMethod);
paymentMethodRouter.post("/", paymentMethodController.createPaymentMethod);
paymentMethodRouter.patch("/:id", paymentMethodController.updatePaymentMethod);
paymentMethodRouter.delete("/:id", paymentMethodController.deletePaymentMethod);

module.exports = paymentMethodRouter;
