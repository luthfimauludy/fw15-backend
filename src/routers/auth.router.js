const authRouter = require("express").Router();
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validator.middleware");

authRouter.post("/login", validate("authLogin"), authController.login);
authRouter.post("/register", authController.register);
authRouter.post("/forgotPassword", authController.forgotPassword);
authRouter.post(
  "/resetPassword",
  validate("resetPassword"),
  authController.resetPassword
);

module.exports = authRouter;
