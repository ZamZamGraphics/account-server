const router = require("express").Router();
const {
  login,
  verification,
  resendVerification,
  forgotPassowrd,
  resetPassword,
} = require("../controllers/loginController");

const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../validator/loginValidator");

const {
  resetPasswordValidators,
  resetPasswordValidationHandler,
} = require("../validator/resetPasswordValidator");

// login
router.post("/login", doLoginValidators, doLoginValidationHandler, login);

// forgot password
router.post("/forgot-password", forgotPassowrd);
router.post(
  "/reset",
  resetPasswordValidators,
  resetPasswordValidationHandler,
  resetPassword
);
router.get("/verify", verification);
router.post("/resend", resendVerification);

module.exports = router;