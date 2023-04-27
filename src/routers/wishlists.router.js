const wishlistRouter = require("express").Router();
const wishlistController = require("../controllers/wishlists.controller");

wishlistRouter.get("/", wishlistController.getWishlist);
wishlistRouter.post("/", wishlistController.createWishlist);

module.exports = wishlistRouter;
