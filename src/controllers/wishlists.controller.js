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

exports.checkingWishlist = async (req, res) => {
  const { id } = req.user;
  const event = req.query;
  const eventId = event.eventId;
  const checkWislist = await wishlistsModel.findOneByUserIdAndEventId(
    id,
    eventId
  );
  if (!checkWislist) {
    return res.json({
      success: false,
      message: `Wishlist event ${eventId} by user ${id} not found`,
      results: false,
    });
  }
  return res.json({
    success: true,
    message: `Wishlist event ${eventId} by user ${id} found`,
    results: true,
  });
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
    const checkDuplicate = await wishlistsModel.findOneByUserIdAndEventId(
      id,
      eventId
    );
    if (checkDuplicate) {
      const deleteWishlist = await wishlistsModel.deleteByUserIdAndEventId(
        id,
        eventId
      );
      return res.json({
        success: true,
        message: "Remove wishlist successfully!",
        results: deleteWishlist,
      });
    }

    const wishlist = await wishlistsModel.insert(wishlistData);
    if (!wishlist) {
      throw Error("create_wishlist_failed");
    }
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
