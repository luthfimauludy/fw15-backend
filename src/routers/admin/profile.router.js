const profileRouter = require("express").Router();
const profileController = require("../../controllers/admin/profile.controller");
const uploadMiddleware = require("../../middlewares/upload.middleware");
const validate = require("../../middlewares/validator.middleware");

profileRouter.get(
  "/",
  validate("getAllProfiles"),
  profileController.getAllProfiles
);
profileRouter.get(
  "/:id",
  validate("idParams"),
  profileController.getOneProfile
);
profileRouter.post(
  "/",
  uploadMiddleware("picture"),
  validate("createProfile"),
  profileController.createProfile
);
profileRouter.patch(
  "/:id",
  validate("idParams"),
  uploadMiddleware("picture"),
  validate("updateProfile"),
  profileController.updateProfile
);
profileRouter.delete(
  "/:id",
  validate("idParams"),
  profileController.deleteProfile
);

module.exports = profileRouter;
