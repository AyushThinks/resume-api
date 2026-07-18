const express = require("express");
const router = express.Router();

const templatesController = require("../controllers/templatesController");

// Get all templates
router.get("/", templatesController.getAllTemplates);

// Get a template by ID
router.get("/:id", templatesController.getTemplateByID);

module.exports = router;