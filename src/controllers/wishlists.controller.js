const wishlistsModel = require("../models/wishlists.model");
const eventsModel = require("../models/events.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.getWishlist = async (req, res) => {
  try {
    const { id } = req.user;
    const wishlist = await wishlistsModel.findAllByUserId(id);
    if (!wishlist) {
      return errorHandler(res, undefined);
    }
    return res.json({
      success: true,
      message: "Detail wishlist",
      results: wishlist,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.createWishlist = async (req, res) => {
  try {
    const { id } = req.user;
    const { eventId } = req.body;
    const data = await eventsModel.findOne(eventId);
    if (!data) {
      return errorHandler(res, undefined);
    }
    const wishlistData = {
      eventId,
      userId: id,
    };
    const wishlist = await wishlistsModel.insert(wishlistData);
    return res.json({
      success: true,
      message: "Create wishlist success!",
      results: wishlist,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
