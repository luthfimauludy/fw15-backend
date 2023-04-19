const cityRouter = require("express").Router();
const cityController = require("../controllers/cities.controller");

cityRouter.get("/", cityController.getAllCities);

module.exports = cityRouter;
