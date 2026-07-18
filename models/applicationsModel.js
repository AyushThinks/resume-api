const readData = require("../utils/readData");
const writeData = require("../utils/writeData");

// Get all applications
function getAllApplications() {
  const data = readData();
  return data.applications;
}

// Create a new application
function createApplication(applicationData) {
  const data = readData();
  const newApplication = {
    id: Date.now().toString(),
    company: applicationData.company || "Unknown",
    role: applicationData.role || "Unknown",
    status: applicationData.status || "applied",
    createdAt: new Date().toISOString()
  };

  data.applications.push(newApplication);
  writeData(data);
  return newApplication;
}

// Update an application
function updateApplication(id, updatedData) {
  const data = readData();
  const application = data.applications.find(a => a.id === id);
  if (!application) {
    return null;
  }
  
  Object.assign(application, updatedData, {
    id: application.id
  });
  writeData(data);
  return application;
}

// Delete an application
function deleteApplication(id) {
  const data = readData();
  const index = data.applications.findIndex(a => a.id === id);
  if (index === -1) {
    return null;
  }
  const deletedApplication = data.applications[index];

  data.applications.splice(index, 1);
  writeData(data);
  return deletedApplication;
}

module.exports = {
  getAllApplications,
  createApplication,
  updateApplication,
  deleteApplication
};