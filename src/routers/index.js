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
router.use("/profile", authMiddleware, require("./profile.router"));

router.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Resource not found",
  });
});

module.exports = router;
