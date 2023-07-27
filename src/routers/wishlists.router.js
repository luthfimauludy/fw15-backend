const wishlistRouter = require("express").Router();
const wishlistController = require("../controllers/wishlists.controller");

wishlistRouter.get("/", wishlistController.getWishlist);
wishlistRouter.get("/check", wishlistController.checkingWishlist);
wishlistRouter.post("/", wishlistController.createWishlist);
wishlistRouter.delete("/:id", wishlistController.deleteWishlist);

module.exports = wishlistRouter;
