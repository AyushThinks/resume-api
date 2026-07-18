const applicationsModel = require("../models/applicationsModel");

// Get all applications
function getAllApplications(req, res) {
  const applications = applicationsModel.getAllApplications();
  res.status(200).json(applications);
}

// Create a new application
function createApplication(req, res) {
  const application = applicationsModel.createApplication(req.body);

  res.status(201).json(application);
}

// Update an application
function updateApplication(req, res) {
  const application = applicationsModel.updateApplication(
    req.params.id,
    req.body
  );
  // Return 404 if application doesn't exist
  if (!application) {
    return res.status(404).json({
      error: "Application not found"
    });
  }

  res.status(200).json(application);
}

// Delete an application
function deleteApplication(req, res) {
  const application = applicationsModel.deleteApplication(req.params.id);
  // Return 404 if application doesn't exist
  if (!application) {
    return res.status(404).json({
      error: "Application not found"
    });
  }

  res.status(204).send();
}

module.exports = {
  getAllApplications,
  createApplication,
  updateApplication,
  deleteApplication
};