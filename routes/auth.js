const express = require('express');
const router = express.Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
  if (!req.body) {
    return res.status(400).json({
        error: "Request body cannot be empty"
    });
  }
  res.status(201).json({
    id: Date.now().toString(),
    email: req.body.email || 'unknown@example.com',
    message: 'Account created'
  });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  if (!req.body) {
    return res.status(400).json({
        error: "Request body cannot be empty"
    });
  }
  res.status(200).json({
    token: 'mock-jwt-token-' + Date.now(),
    email: req.body.email || 'unknown@example.com'
  });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logged out' });
});

// POST /api/auth/forgot-password
router.post('/forgot-password', (req, res) => {
  res.status(200).json({ message: 'Password reset email sent (mock)' });
});

// POST /api/auth/reset-password
router.post('/reset-password', (req, res) => {
  res.status(200).json({ message: 'Password reset successful (mock)' });
});

module.exports = router;