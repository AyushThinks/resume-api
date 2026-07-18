const usersModel = require("../models/usersModel");

// Get current user
function getCurrentUser(req, res) {
  const user = usersModel.getCurrentUser();

  res.status(200).json(user);
}

// Update current user
function updateCurrentUser(req, res) {
  const user = usersModel.updateCurrentUser(req.body);

  res.status(200).json(user);
}

// Delete current user
function deleteCurrentUser(req, res) {
  usersModel.deleteCurrentUser();

  res.status(204).send();
}

module.exports = {
  getCurrentUser,
  updateCurrentUser,
  deleteCurrentUser
};