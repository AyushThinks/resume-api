const express = require("express");
const router = express.Router();

const applicationsController = require("../controllers/applicationsController");
const validateJson = require("../middleware/validator");

// Get all applications
router.get("/", applicationsController.getAllApplications);

// Create a new application
router.post("/", validateJson, applicationsController.createApplication);

// Update an application
router.patch("/:id", validateJson, applicationsController.updateApplication);

// Delete an application
router.delete("/:id", applicationsController.deleteApplication);

module.exports = router;