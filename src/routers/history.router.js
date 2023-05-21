const historyRouter = require("express").Router();
const historyController = require("../controllers/history.controller");

historyRouter.get("/", historyController.getAllHistory);

module.exports = historyRouter;
