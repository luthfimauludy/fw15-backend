const wishlistsModel = require("../../models/wishlists.model");
const errorHandler = require("../../helpers/errorHandler.helper");

exports.getAllWishlists = async (req, res) => {
  try {
    const data = { ...req.query };
    const wishlist = await wishlistsModel.findAll(data);
    return res.json({
      success: true,
      message: "List of all wishlists",
      results: wishlist,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.getOneWishlist = async (req, res) => {
  const data = await wishlistsModel.findOne(req.params.id);
  if (data) {
    return res.json({
      success: true,
      message: "Detail wishlist",
      results: data,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Error: Wishlist is not found",
  });
};

exports.createWishlist = async (req, res) => {
  try {
    const data = { ...req.body };
    const wishlist = await wishlistsModel.insert(data);
    return res.json({
      success: true,
      message: `Create wishlist successfully`,
      results: wishlist,
    });
  } catch (err) {
    return errorHandler(res, err);
  }
};

exports.updateWishlist = async (req, res) => {
  try {
    const data = { ...req.body };
    const wishlist = await wishlistsModel.update(req.params.id, data);
    return res.json({
      success: true,
      message: "Update wishlist successfully",
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
      return errorHandler(res, undefined);
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
