const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Backend is running well",
  });
});

router.use("/auth", require("./auth.router"));
router.use("/admin", authMiddleware, require("./admin/admin.router"));
router.use("/categories", authMiddleware, require("./categories.router"));
router.use(
  "/change-password",
  authMiddleware,
  require("./changePassword.router")
);
router.use("/cities", authMiddleware, require("./cities.router"));
router.use("/events", authMiddleware, require("./events.router"));
router.use("/partners", authMiddleware, require("./partners.router"));
router.use("/payments", authMiddleware, require("./payments.router"));
router.use("/profile", authMiddleware, require("./profile.router"));
router.use("/reservations", authMiddleware, require("./reservations.router"));
router.use("/wishlists", authMiddleware, require("./wishlists.router"));

router.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Resource not found",
  });
});

module.exports = router;
