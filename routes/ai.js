const express = require("express");
const router = express.Router();

const aiController = require("../controllers/aiController");
const validateJson = require("../middleware/validator");

// Improve bullet points
router.post("/bullets", validateJson, aiController.improveBullets);

// Improve summary
router.post("/summary", validateJson, aiController.improveSummary);

// Rewrite text
router.post("/rewrite", validateJson, aiController.rewriteText);

// Generate prompt
router.post("/prompt", validateJson, aiController.generatePrompt);

module.exports = router;