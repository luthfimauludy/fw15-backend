const { body, query, param, validationResult } = require("express-validator");

const nameFormat = body("name")
  .notEmpty()
  .withMessage("Name cannot be empty")
  .isLength({ min: 3, max: 255 })
  .withMessage("Name length is not valid");

const emailFormat = body("email").isEmail().withMessage("Email is not valid");

const passwordFormat = body("password")
  .isStrongPassword()
  .withMessage("Password must be strong");

const queryFormat = query("sortBy")
  .isIn(["ASC", "DESC"])
  .withMessage("Sort type is not valid");

const eventIdFormat = body("eventId")
  .isLength({ min: 5 })
  .withMessage("EventId is not valid");

const userIdFormat = body("userId")
  .isLength({ min: 5 })
  .withMessage("UserId is not valid");

const rules = {
  authLogin: [emailFormat, passwordFormat],
  getAllCategories: [queryFormat],
  getAllCities: [queryFormat],
  getAllEventCategories: [queryFormat],
  getAllEvents: [queryFormat],
  getAllPartners: [queryFormat],
  getAllPaymentMethods: [queryFormat],
  getAllProfiles: [queryFormat],
  getAllReservations: [queryFormat],
  getAllReservationSections: [queryFormat],
  getAllReservationStatus: [queryFormat],
  getAllReservationTickets: [queryFormat],
  getAllWishlists: [queryFormat],
  getAllUsers: [queryFormat],
  createCategory: [nameFormat],
  createCity: [nameFormat],
  createEventCategory: [
    eventIdFormat,
    body("categoryId")
      .isLength({ min: 5 })
      .withMessage("CategoryId is not valid"),
  ],
  createEvent: [
    body("title")
      .notEmpty()
      .withMessage("Title cannot be empty")
      .isLength({ min: 3, max: 255 })
      .withMessage("Title length is not valid"),
    body("date").notEmpty().withMessage("Date cannot be empty"),
    body("cityId").isLength({ min: 5 }).withMessage("CityId is not valid"),
    body("descriptions").notEmpty().withMessage("Descriptions cannot be empty"),
  ],
  createPartner: [nameFormat],
  createPaymentMethod: [nameFormat],
  createProfile: [
    body("fullName")
      .notEmpty()
      .withMessage("Full name cannot be empty")
      .isLength({ min: 3, max: 80 })
      .withMessage("Full name length is not valid"),
    body("phoneNumber")
      .notEmpty()
      .withMessage("Phone Number cannot be empty")
      .isLength({ min: 10, max: 12 })
      .withMessage("Phone Number length is not valid"),
    body("gender").notEmpty().withMessage("Gender cannot be empty"),
    body("profession")
      .notEmpty()
      .withMessage("Profession cannot be empty")
      .isLength({ min: 2 })
      .withMessage("Profession length is not valid"),
    body("nasionality")
      .notEmpty()
      .withMessage("Nasionality cannot be empty")
      .isLength({ min: 2 })
      .withMessage("Nasionality length is not valid"),
    body("birthDate").notEmpty().withMessage("Date cannot be empty"),
  ],
  createReservation: [
    eventIdFormat,
    userIdFormat,
    body("statusId").isLength({ min: 5 }).withMessage("StatusId is not valid"),
    body("paymentMethodId")
      .isLength({ min: 5 })
      .withMessage("PaymentMethodId is not valid"),
  ],
  createReservationSection: [
    nameFormat,
    body("price").notEmpty().withMessage("Price cannot be empty"),
  ],
  createReservationStatus: [nameFormat],
  createReservationTicket: [
    body("reservationId")
      .isLength({ min: 5 })
      .withMessage("ReservationId is not valid"),
    body("sectionId").isLength({ min: 5 }).withMessage("CityId is not valid"),
    body("quantity").notEmpty().withMessage("Quantity cannot be empty"),
  ],
  createWishlist: [eventIdFormat, userIdFormat],
  createUser: [
    body("username")
      .notEmpty()
      .withMessage("Username cannot be empty")
      .isLength({ min: 3, max: 80 })
      .withMessage("Username length is not valid"),
    emailFormat,
    passwordFormat,
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
