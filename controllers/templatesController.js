const templatesModel = require("../models/templatesModel");

// Get all templates
function getAllTemplates(req, res) {
  const templates = templatesModel.getAllTemplates();

  res.status(200).json(templates);
}

// Get a template by ID
function getTemplateByID(req, res) {
  const template = templatesModel.getTemplateByID(req.params.id);

  // Return 404 if template doesn't exist
  if (!template) {
    return res.status(404).json({
      error: "Template not found"
    });
  }

  res.status(200).json(template);
}

module.exports = {
  getAllTemplates,
  getTemplateByID
};