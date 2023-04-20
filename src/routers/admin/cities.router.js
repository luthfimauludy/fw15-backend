const cityRouter = require("express").Router();
const cityController = require("../../controllers/admin/cities.controller");
const uploadMiddleware = require("../../middlewares/upload.middleware");
const validate = require("../../middlewares/validator.middleware");

cityRouter.get("/", validate("getAllCities"), cityController.getAllCities);
cityRouter.get("/:id", validate("idParams"), cityController.getOneCity);
cityRouter.post(
  "/",
  uploadMiddleware("picture"),
  validate("createCity"),
  cityController.createCity
);
cityRouter.patch(
  "/:id",
  validate("idParams"),
  uploadMiddleware("picture"),
  validate("updateCity"),
  cityController.updateCity
);
cityRouter.delete("/:id", validate("idParams"), cityController.deleteCity);

module.exports = cityRouter;
