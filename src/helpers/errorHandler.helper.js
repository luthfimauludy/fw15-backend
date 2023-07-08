const errorHandler = (res, err) => {
  // if (err?.message === "validation") {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Error: Email already exists!",
  //   });
  // }
  if (err?.message?.includes("duplicate key")) {
    return res.status(409).json({
      success: false,
      message: "Error: Email already exists!",
    });
  }
  if (err?.message?.includes("jwt malformed")) {
    return res.status(401).json({
      success: false,
      message: "Error: Token is not valid!",
    });
  }
  if (err?.message?.includes("invalid signature")) {
    return res.status(401).json({
      success: false,
      message: "Error: Token signature is not valid!",
    });
  }
  if (err?.message?.includes("too large")) {
    return res.status(400).json({
      success: false,
      message: "Error: File is too large!",
    });
  }
  if (err === undefined) {
    return res.status(404).json({
      success: false,
      message: "Error: User not found!",
    });
  }
  if (err?.message?.includes("data_not_found")) {
    return res.status(404).json({
      success: false,
      message: "Error: Data not found!",
    });
  }
  if (err?.message?.includes("event_not_created_by_you")) {
    return res.status(400).json({
      success: false,
      message: "Error: This event is not created by you!",
    });
  }
  if (err?.message?.includes("name_empty_field")) {
    return res.status(400).json({
      success: false,
      message: "Error: Fullname cannot be empty!",
    });
  }
  if (err?.message?.includes("empty_field")) {
    return res.status(400).json({
      success: false,
      message: "Error: Email or password cannot be empty!",
    });
  }
  if (err?.message?.includes("email_format")) {
    return res.status(400).json({
      success: false,
      message: "Error: Email is not valid!",
    });
  }
  if (err?.message?.includes("fileformat_error")) {
    return res.status(400).json({
      success: false,
      message: "Error: File format is not valid",
    });
  }
  if (err?.message?.includes("wrong_credentials")) {
    return res.status(401).json({
      success: false,
      message: "Error: Wrong email or password!",
    });
  }
  if (err?.message?.includes("wrong_password")) {
    return res.status(401).json({
      success: false,
      message: "Error: Wrong password!",
    });
  }
  if (err?.message?.includes("unauthorized")) {
    return res.status(401).json({
      success: false,
      message: "Error: Unauthorized",
    });
  }
  if (err?.message?.includes("password_unmatch")) {
    return res.status(400).json({
      success: false,
      message: "Error: Password and confirm password does not match!",
    });
  }
  if (err?.message?.includes("no_forgot_request")) {
    return res.status(400).json({
      success: false,
      message: "Error: No request forgot password!",
    });
  }

  console.log(err);
  return res.status(500).json({
    success: false,
    message: "Error: Internal server error!",
  });
};

module.exports = errorHandler;
