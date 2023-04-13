const userRouter = require("express").Router();
const categoryController = require("../controllers/categories.controller");
const validate = require("../middlewares/validator.middleware");

userRouter.get(
  "/",
  validate("getAllUsers"),
  categoryController.getAllCategories
);
userRouter.get("/:id", validate("idParams"), categoryController.getOneCategory);
userRouter.post(
  "/",
  validate("createCategory"),
  categoryController.createCategory
);
userRouter.patch(
  "/:id",
  validate("idParams"),
  validate("createCategory"),
  categoryController.updateCategory
);
userRouter.delete(
  "/:id",
  validate("idParams"),
  categoryController.deleteCategory
);

module.exports = userRouter;
