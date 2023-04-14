const { body, query, param, validationResult } = require("express-validator");
// const errorHandler = require("../helpers/errorHandler.helper");

const nameFormat = body("name")
  .notEmpty()
  .withMessage("Name cannot be empty")
  .isLength({ min: 3, max: 80 })
  .withMessage("Name length is not valid");
const emailFormat = body("email").isEmail().withMessage("Email is not valid");
const queryFormat = query("sortBy")
  .isIn(["ASC", "DESC"])
  .withMessage("Sort type is not valid");

const rules = {
  authLogin: [
    emailFormat,
    body("password").isLength({ min: 1 }).withMessage("Password is not valid"),
  ],
  getAllCategories: [queryFormat],
  getAllCities: [queryFormat],
  getAllUsers: [queryFormat],
  createCategory: [nameFormat],
  createCity: [nameFormat],
  createUser: [
    body("username")
      .notEmpty()
      .withMessage("Username cannot be empty")
      .isLength({ min: 3, max: 80 })
      .withMessage("Username length is not valid"),
    emailFormat,
    body("password").isStrongPassword().withMessage("Password must be strong"),
  ],
  idParams: [
    param("id")
      .toInt()
      .isDecimal()
      .withMessage("Id is not valid")
      .isInt({ min: 1 })
      .withMessage("Id need to be more than 0"),
  ],
};

const validator = (req, res, next) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      throw Error("validation");
    }
    return next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      results: errors.array(),
    });
    // return errorHandler(res, err);
  }
};

const validate = (selectedRules) => [rules[selectedRules], validator];

module.exports = validate;
