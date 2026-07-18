const authModel = require("../models/authModel");

// Register
function registerUser(req, res) {
    const result = authModel.registerUser(req.body.email);
    res.status(201).json(result);
}

// Login
function loginUser(req, res) {
    const result = authModel.loginUser(req.body.email);
    res.status(200).json(result);
}

// Logout
function logoutUser(req, res) {
    const result = authModel.logoutUser();
    res.status(200).json(result);
}

// Forgot Password
function forgotPassword(req, res) {
    const result = authModel.forgotPassword();
    res.status(200).json(result);
}

// Reset Password
function resetPassword(req, res) {
    const result = authModel.resetPassword();
    res.status(200).json(result);
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword
};