const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const validateJson = require("../middleware/validator");

// Get current user
router.get("/me", usersController.getCurrentUser);

// Update current user
router.put("/me", validateJson, usersController.updateCurrentUser);

// Delete current user
router.delete("/me", usersController.deleteCurrentUser);

module.exports = router;