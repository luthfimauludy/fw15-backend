const partnerRouter = require("express").Router();
const partnerController = require("../../controllers/admin/partners.controller");
const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

partnerRouter.get("/", partnerController.getAllPartners);
partnerRouter.get("/:id", partnerController.getOnePartner);
partnerRouter.post(
  "/",
  uploadMiddleware("picture"),
  partnerController.createPartner
);
partnerRouter.patch(
  "/:id",
  uploadMiddleware("picture"),
  partnerController.updatePartner
);
partnerRouter.delete("/:id", partnerController.deletePartner);

module.exports = partnerRouter;
