const partnerRouter = require("express").Router();
const partnerController = require("../../controllers/admin/partners.controller");
const uploadMiddleware = require("../../middlewares/upload.middleware");
const validate = require("../../middlewares/validator.middleware");

partnerRouter.get(
  "/",
  validate("getAllPartners"),
  partnerController.getAllPartners
);
partnerRouter.get(
  "/:id",
  validate("idParams"),
  partnerController.getOnePartner
);
partnerRouter.post(
  "/",
  uploadMiddleware("picture"),
  validate("createPartner"),
  partnerController.createPartner
);
partnerRouter.patch(
  "/:id",
  validate("idParams"),
  uploadMiddleware("picture"),
  validate("createPartner"),
  partnerController.updatePartner
);
partnerRouter.delete(
  "/:id",
  validate("idParams"),
  partnerController.deletePartner
);

module.exports = partnerRouter;
