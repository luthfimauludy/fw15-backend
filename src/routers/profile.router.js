const profileRouter = require("express").Router();
const profileController = require("../controllers/profile.controller");
// const validate = require("../middlewares/validator.middleware");
const uploadMiddleware = require("../middlewares/upload.middleware");

profileRouter.patch(
  "/",
  uploadMiddleware("picture"),
  profileController.updateProfile
);

module.exports = profileRouter;
