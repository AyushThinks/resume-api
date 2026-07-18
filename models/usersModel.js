// Get current user
function getCurrentUser() {
  return {
    id: "mock-user-1",
    name: "Ayush Joshi",
    tier: "free",
    aiCredits: 10
  };
}

// Update current user
function updateCurrentUser(updatedData) {
  return {
    id: "mock-user-1",
    ...updatedData,
    message: "Profile updated"
  };
}

// Delete current user
function deleteCurrentUser() {
  return true;
}

module.exports = {
  getCurrentUser,
  updateCurrentUser,
  deleteCurrentUser
};