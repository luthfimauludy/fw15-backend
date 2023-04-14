const wishlistRouter = require("express").Router();
const wishlistController = require("../../controllers/admin/wishlists.controller");
// const uploadMiddleware = require("../../middlewares/upload.middleware");
// const validate = require("../../middlewares/validator.middleware");

wishlistRouter.get("/", wishlistController.getAllWishlists);
wishlistRouter.get("/:id", wishlistController.getOneWishlist);
wishlistRouter.post("/", wishlistController.createWishlist);
wishlistRouter.patch("/:id", wishlistController.updateWishlist);
wishlistRouter.delete("/:id", wishlistController.deleteWishlist);

module.exports = wishlistRouter;
