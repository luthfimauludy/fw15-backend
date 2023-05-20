const { body, query, param, validationResult } = require("express-validator");

const nameFormat = body("name")
  .notEmpty()
  .withMessage("Name cannot be empty")
  .isLength({ min: 3 })
  .withMessage("Name length is not valid, at least 3 characters");

const nameUpdateFormat = body("name")
  .optional()
  .notEmpty()
  .withMessage("Name cannot be empty")
  .isLength({ min: 3 })
  .withMessage("Name length is not valid, at least 3 characters");

const fullNameFormat = body("fullName")
  .notEmpty()
  .withMessage("Full name cannot be empty")
  .isLength({ min: 3, max: 80 })
  .withMessage("Full name length is not valid, at least 3 characters");

const emailFormat = body("email")
  .notEmpty()
  .withMessage("Email cannot be empty")
  .isEmail()
  .withMessage("Email is not valid");

const emailUpdateFormat = body("email")
  .optional()
  .notEmpty()
  .withMessage("Email cannot be empty")
  .isEmail()
  .withMessage("Email is not valid");

const passwordFormat = body("password")
  .notEmpty()
  .withMessage("Password cannot be empty")
  .isStrongPassword()
  .withMessage(
    "Password must be strong, at least 8 characters and must include capital letters, numbers and symbols"
  );

const passwordUpdateFormat = body("password")
  .optional()
  .notEmpty()
  .withMessage("Password cannot be empty")
  .isStrongPassword()
  .withMessage(
    "Password must be strong, at least 8 characters and must include capital letters, numbers and symbols"
  );

const confirmPasswordFormat = body("confirmPassword")
  .custom((value, { req }) => {
    return value === req.body.password;
  })
  .withMessage("Confirm password does not match");

const queryFormat = query("sortBy")
  .optional()
  .isIn(["ASC", "DESC"])
  .withMessage("Sort type is not valid");

const eventIdFormat = body("eventId")
  .notEmpty()
  .withMessage("EventId cannot be empty")
  .toInt()
  .withMessage("EventId must be integer");

const eventIdUpdateFormat = body("eventId")
  .optional()
  .notEmpty()
  .withMessage("EventId cannot be empty")
  .toInt()
  .withMessage("EventId must be integer");

const userIdFormat = body("userId")
  .notEmpty()
  .withMessage("UserId cannot be empty");

const userIdUpdateFormat = body("userId")
  .optional()
  .notEmpty()
  .withMessage("UserId cannot be empty");

const rules = {
  authLogin: [emailFormat, passwordFormat],
  authRegister: [
    fullNameFormat,
    emailFormat,
    passwordFormat,
    confirmPasswordFormat,
  ],
  authForgotPassword: [emailFormat],
  authResetPassword: [
    body("code")
      .isLength({ min: 6 })
      .withMessage("Code length must be at least 6 digits"),
    emailFormat,
    passwordFormat,
    confirmPasswordFormat,
  ],
  getAllCategories: [queryFormat],
  createCategory: [nameFormat],
  updateCategory: [nameFormat],
  getAllCities: [queryFormat],
  createCity: [nameFormat],
  updateCity: [nameUpdateFormat],
  getAllEvents: [queryFormat],
  createEvent: [
    body("title")
      .notEmpty()
      .withMessage("Title cannot be empty")
      .isLength({ min: 3 })
      .withMessage("Title length is not valid"),
    body("date")
      .notEmpty()
      .withMessage("Date cannot be empty")
      .isDate({ format: "MM-DD-YYYY" })
      .withMessage("Date format is not valid, use MM-DD-YYYY"),
    body("cityId").notEmpty().withMessage("CityId cannot be empty"),
    body("descriptions").notEmpty().withMessage("Descriptions cannot be empty"),
    body("createdBy").notEmpty().withMessage("CreatedBy cannot be empty"),
  ],
  updateEvent: [
    body("title")
      .optional()
      .notEmpty()
      .withMessage("Title cannot be empty")
      .isLength({ min: 3 })
      .withMessage("Title length is not valid, at least 3 characters"),
    body("date")
      .optional()
      .notEmpty()
      .withMessage("Date cannot be empty")
      .isDate({ format: "MM-DD-YYYY" })
      .withMessage("Date format is not valid, use MM-DD-YYYY"),
    body("cityId").optional().notEmpty().withMessage("CityId cannot be empty"),
    body("descriptions")
      .optional()
      .notEmpty()
      .withMessage("Descriptions cannot be empty"),
    body("createdBy")
      .optional()
      .notEmpty()
      .withMessage("CreatedBy cannot be empty"),
  ],
  getAllEventCategories: [queryFormat],
  createEventCategory: [
    eventIdFormat,
    body("categoryId").notEmpty().withMessage("CategoryId cannot be empty"),
  ],
  updateEventCategory: [
    eventIdUpdateFormat,
    body("categoryId")
      .optional()
      .notEmpty()
      .withMessage("CategoryId cannot be empty"),
  ],
  getAllPartners: [queryFormat],
  createPartner: [nameFormat],
  updatePartner: [nameUpdateFormat],
  getAllPaymentMethods: [queryFormat],
  createPaymentMethod: [nameFormat],
  updatePaymentMethod: [nameUpdateFormat],
  getAllProfiles: [queryFormat],
  createProfile: [
    fullNameFormat,
    body("phoneNumber")
      .notEmpty()
      .withMessage("Phone Number cannot be empty")
      .isMobilePhone()
      .withMessage("Must be a phone number format")
      .isLength({ min: 10, max: 12 })
      .withMessage("Phone Number length is not valid, at least 10 characters"),
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
    body("birthDate")
      .notEmpty()
      .withMessage("Birth date cannot be empty")
      .isDate({ format: "MM-DD-YYYY" })
      .withMessage("Birth date format is not valid, use MM-DD-YYYY"),
  ],
  updateProfile: [
    body("fullName")
      .optional()
      .notEmpty()
      .withMessage("Full name cannot be empty")
      .isLength({ min: 3, max: 80 })
      .withMessage("Full name length is not valid, at least 3 characters"),
    body("phoneNumber")
      .optional()
      .notEmpty()
      .withMessage("Phone Number cannot be empty")
      .isMobilePhone()
      .withMessage("Must be a phone number format")
      .isLength({ min: 10, max: 12 })
      .withMessage(
        "Phone Number length is not valid, at least 10 characters and max 12 characters"
      ),
    body("gender").optional().notEmpty().withMessage("Gender cannot be empty"),
    body("profession")
      .optional()
      .notEmpty()
      .withMessage("Profession cannot be empty")
      .isLength({ min: 2 })
      .withMessage("Profession length is not valid"),
    body("nasionality")
      .optional()
      .notEmpty()
      .withMessage("Nasionality cannot be empty")
      .isLength({ min: 2 })
      .withMessage("Nasionality length is not valid"),
    body("birthDate")
      .optional()
      .notEmpty()
      .withMessage("BirthDate cannot be empty"),
  ],
  getAllReservations: [queryFormat],
  createReservation: [
    eventIdFormat,
    userIdFormat,
    body("statusId").notEmpty().withMessage("StatusId cannot be empty"),
    body("paymentMethodId")
      .notEmpty()
      .withMessage("PaymentMethodId cannot be empty")
      .toInt()
      .withMessage("PaymentMethodId must be integer"),
  ],
  updateReservation: [
    eventIdUpdateFormat,
    userIdUpdateFormat,
    body("statusId")
      .optional()
      .notEmpty()
      .withMessage("StatusId cannot be empty"),
    body("paymentMethodId")
      .optional()
      .notEmpty()
      .withMessage("PaymentMethodId cannot be empty")
      .toInt()
      .withMessage("PaymentMethodId must be integer"),
  ],
  getAllReservationSections: [queryFormat],
  createReservationSection: [
    nameFormat,
    body("price").notEmpty().withMessage("Price cannot be empty"),
  ],
  updateReservationSection: [
    nameUpdateFormat,
    body("price").optional().notEmpty().withMessage("Price cannot be empty"),
  ],
  getAllReservationStatus: [queryFormat],
  createReservationStatus: [nameFormat],
  updateReservationStatus: [nameUpdateFormat],
  getAllReservationTickets: [queryFormat],
  createReservationTicket: [
    body("reservationId")
      .notEmpty()
      .withMessage("ReservationId cannot be empty")
      .toInt()
      .withMessage("ReservationId must be integer"),
    body("sectionId")
      .notEmpty()
      .withMessage("SectionId cannot be empty")
      .toInt()
      .withMessage("SectionId must be integer"),
    body("quantity")
      .notEmpty()
      .withMessage("Quantity cannot be empty")
      .toInt()
      .withMessage("Quantity must be integer"),
  ],
  updateReservationTicket: [
    body("reservationId")
      .optional()
      .notEmpty()
      .withMessage("ReservationId cannot be empty")
      .toInt()
      .withMessage("ReservationId must be integer"),
    body("sectionId")
      .optional()
      .notEmpty()
      .withMessage("SectionId cannot be empty")
      .toInt()
      .withMessage("SectionId must be integer"),
    body("quantity")
      .optional()
      .notEmpty()
      .withMessage("Quantity cannot be empty")
      .toInt()
      .withMessage("Quantity must be integer"),
  ],
  getAllWishlists: [queryFormat],
  createWishlist: [eventIdFormat, userIdFormat],
  updateWishlist: [eventIdUpdateFormat, userIdUpdateFormat],
  getAllUsers: [queryFormat],
  createUser: [
    body("username")
      .notEmpty()
      .withMessage("Username cannot be empty")
      .isLength({ min: 3, max: 80 })
      .withMessage("Username length is not valid, at least 3 characters"),
    emailFormat,
    passwordFormat,
  ],
  updateUser: [
    body("username")
      .optional()
      .notEmpty()
      .withMessage("Username cannot be empty")
      .isLength({ min: 3, max: 80 })
      .withMessage("Username length is not valid, at least 3 characters"),
    emailUpdateFormat,
    passwordUpdateFormat,
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
