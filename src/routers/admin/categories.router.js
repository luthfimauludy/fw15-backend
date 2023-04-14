const categoryRouter = require("express").Router();
const categoryController = require("../../controllers/admin/categories.controller");
const validate = require("../../middlewares/validator.middleware");

categoryRouter.get(
  "/",
  validate("getAllUsers"),
  categoryController.getAllCategories
);
categoryRouter.get(
  "/:id",
  validate("idParams"),
  categoryController.getOneCategory
);
categoryRouter.post(
  "/",
  validate("createUser"),
  categoryController.createCategory
);
categoryRouter.patch(
  "/:id",
  validate("idParams"),
  validate("createUser"),
  categoryController.updateCategory
);
categoryRouter.delete(
  "/:id",
  validate("idParams"),
  categoryController.deleteCategory
);

module.exports = categoryRouter;
