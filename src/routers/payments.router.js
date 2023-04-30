const paymentsRouter = require("express").Router();
const paymentsController = require("../controllers/payments.controller");

paymentsRouter.post("/", paymentsController.createPayment);

module.exports = paymentsRouter;
