const wishlistRouter = require("express").Router();
const wishlistController = require("../../controllers/admin/wishlists.controller");
const validate = require("../../middlewares/validator.middleware");

wishlistRouter.get(
  "/",
  validate("getAllWishlists"),
  wishlistController.getAllWishlists
);
wishlistRouter.get(
  "/:id",
  validate("idParams"),
  wishlistController.getOneWishlist
);
wishlistRouter.post(
  "/",
  validate("createWishlist"),
  wishlistController.createWishlist
);
wishlistRouter.patch(
  "/:id",
  validate("idParams"),
  validate("createWishlist"),
  wishlistController.updateWishlist
);
wishlistRouter.delete(
  "/:id",
  validate("idParams"),
  wishlistController.deleteWishlist
);

module.exports = wishlistRouter;
