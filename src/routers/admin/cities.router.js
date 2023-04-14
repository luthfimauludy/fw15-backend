const cityRouter = require("express").Router();
const cityController = require("../../controllers/admin/cities.controller");
const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

cityRouter.get("/", cityController.getAllCities);
cityRouter.get("/:id", cityController.getOneCity);
cityRouter.post("/", uploadMiddleware("picture"), cityController.createCity);
cityRouter.patch(
  "/:id",
  uploadMiddleware("picture"),
  cityController.updateCity
);
cityRouter.delete("/:id", cityController.deleteCity);

module.exports = cityRouter;
