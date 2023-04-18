const authRouter = require("express").Router();
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validator.middleware");

authRouter.post("/login", validate("authLogin"), authController.login);
authRouter.post("/register", validate("authRegister"), authController.register);
authRouter.post(
  "/forgotPassword",
  validate("authForgotPassword"),
  authController.forgotPassword
);
authRouter.post(
  "/resetPassword",
  validate("resetPassword"),
  authController.resetPassword
);

module.exports = authRouter;
