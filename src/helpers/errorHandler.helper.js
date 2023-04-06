const errorHandler = (req, res, err) => {
  if (err.message.includes("duplicate key")) {
    return res.status(409).json({
      success: false,
      message: "Error: Email already exists!",
    });
  } else if (!data.includes("@")) {
    return res.status(422).json({
      success: false,
      message: "Error: Email is not valid!",
    });
  }
  console.log(err);
  return res.status(500).json({
    success: false,
    message: "Error: Internal server error",
  });
};

module.exports = errorHandler;
