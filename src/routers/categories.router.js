const categoryRouter = require("express").Router();
const categoryController = require("../controllers/categories.controller");

categoryRouter.get("/", categoryController.getAllCategories);

module.exports = categoryRouter;
