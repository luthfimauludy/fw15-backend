const partnersRouter = require("express").Router();
const partnersController = require("../controllers/partners.controller");
const validate = require("../middlewares/validator.middleware");

partnersRouter.get(
  "/",
  validate("getAllPartners"),
  partnersController.getAllPartners
);

module.exports = partnersRouter;
