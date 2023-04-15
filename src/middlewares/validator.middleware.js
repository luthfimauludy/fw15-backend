const { body, query, param, validationResult } = require("express-validator");

const nameFormat = body("name")
  .notEmpty()
  .withMessage("Name cannot be empty")
  .isLength({ min: 3, max: 80 })
  .withMessage("Name length is not valid");

const titleFormat = body("title")
  .notEmpty()
  .withMessage("Title cannot be empty")
  .isLength({ min: 3, max: 80 })
  .withMessage("Title length is not valid");

const emailFormat = body("email").isEmail().withMessage("Email is not valid");

const queryFormat = query("sortBy")
  .isIn(["ASC", "DESC"])
  .withMessage("Sort type is not valid");

const descriptionsFormat = body("descriptions")
  .notEmpty()
  .withMessage("Descriptions cannot be empty")
  .isLength({ max: 255 })
  .withMessage("Descriptions length is not valid");

const dateFormat = body("date").notEmpty().withMessage("Date cannot be empty");

const eventIdFormat = body("eventId")
  .isLength({ min: 5 })
  .withMessage("EventId is not valid");

const categoryIdFormat = body("categoryId")
  .isLength({ min: 5 })
  .withMessage("CategoryId is not valid");

const cityIdFormat = body("cityId")
  .isLength({ min: 5 })
  .withMessage("CityId is not valid");

const rules = {
  authLogin: [
    emailFormat,
    body("password").isLength({ min: 1 }).withMessage("Password is not valid"),
  ],
  getAllCategories: [queryFormat],
  getAllCities: [queryFormat],
  getAllEventCategories: [queryFormat],
  getAllEvents: [queryFormat],
  getAllUsers: [queryFormat],
  createCategory: [nameFormat],
  createCity: [nameFormat],
  createEventCategory: [eventIdFormat, categoryIdFormat],
  createEvent: [titleFormat, dateFormat, cityIdFormat, descriptionsFormat],
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
  }
};

const validate = (selectedRules) => [rules[selectedRules], validator];

module.exports = validate;
