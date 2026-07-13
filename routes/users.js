const express = require('express');
const router = express.Router();

// GET /api/users/me
router.get('/me', (req, res) => {
  res.status(200).json({
    id: 'mock-user-1',
    name: 'Ayush Joshi',
    tier: 'free',
    aiCredits: 10
  });
});

// PUT /api/users/me
router.put('/me', (req, res) => {
  res.status(200).json({
    id: 'mock-user-1',
    ...req.body,
    message: 'Profile updated'
  });
});

// DELETE /api/users/me
router.delete('/me', (req, res) => {
  res.status(204).send();
});

module.exports = router;