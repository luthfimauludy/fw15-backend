const router = require("express").Router();

router.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Backend is running well",
  });
});

router.use("/users", require("./users.router"));

module.exports = router;
