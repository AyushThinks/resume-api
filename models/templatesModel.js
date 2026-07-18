const readData = require("../utils/readData");

// Get all templates
function getAllTemplates() {
  const data = readData();
  return data.templates;
}

// Get a template by ID
function getTemplateByID(id) {
  const data = readData();
  return data.templates.find(t => t.id === id);
}

module.exports = {
  getAllTemplates,
  getTemplateByID
};