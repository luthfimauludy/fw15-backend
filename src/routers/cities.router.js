const cityRouter = require("express").Router();
const cityController = require("../controllers/cities.controller");
// const validate = require("../middlewares/validator.middleware");
// const uploadMiddleware = require("../middlewares/upload.middleware");

cityRouter.get("/", cityController.getCity);

module.exports = cityRouter;
