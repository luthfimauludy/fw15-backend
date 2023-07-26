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
      throw Error("data_not_found");
    }
    const wishlistData = {
      eventId,
      userId: id,
    };
    const wishlist = await wishlistsModel.insert(wishlistData);
    return res.json({
      success: true,
      message: "Create wishlist successfully!",
      results: wishlist,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.deleteWishlist = async (req, res) => {
  try {
    const data = await wishlistsModel.destroy(req.params.id);
    if (!data) {
      throw Error("data_not_found");
    }
    return res.json({
      success: true,
      message: "Delete wishlist successfully",
      results: data,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};
