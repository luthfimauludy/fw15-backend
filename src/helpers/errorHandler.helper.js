const errorHandler = (res, err) => {
  if (err?.message?.includes("duplicate key")) {
    return res.status(409).json({
      success: false,
      message: "Error: Email already exists!",
    });
  }
  if (err === undefined) {
    return res.status(404).json({
      success: false,
      message: "Error: User not found",
    });
  }
  if (err?.message?.includes("empty_field")) {
    return res.status(400).json({
      success: false,
      message: "Email or password cannot be empty!",
    });
  }
  if (err?.message?.includes("email_format")) {
    return res.status(400).json({
      success: false,
      message: "Error: Email not valid!",
    });
  }
  return res.status(500).json({
    success: false,
    message: "Error: Internal server error",
  });
};

module.exports = errorHandler;
