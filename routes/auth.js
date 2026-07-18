const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const validateJson = require("../middleware/validator");

// Register
router.post("/register", validateJson, authController.registerUser);

// Login
router.post("/login", validateJson, authController.loginUser);

// Logout
router.post("/logout", authController.logoutUser);

// Forgot Password
router.post("/forgot-password", authController.forgotPassword);

// Reset Password
router.post("/reset-password", authController.resetPassword);

module.exports = router;