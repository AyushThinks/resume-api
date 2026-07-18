// Register user
function registerUser(email) {
    return {
        id: Date.now().toString(),
        email: email || "unknownxxx@example.com",
        message: "Account created"
    };
}

// Login user
function loginUser(email) {
    return {
        token: "mock-jwt-token-" + Date.now(),
        email: email || "unknown@example.com"
    };
}

// Logout user
function logoutUser() {
    return {
        message: "Logged out"
    };
}

// Forgot password
function forgotPassword() {
    return {
        message: "Password reset email sent"
    };
}

// Reset password
function resetPassword() {
    return {
        message: "Password reset successful"
    };
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword
};