const express = require('express');
const router = express.Router();

router.post('/bullets', (req, res) => {
  res.status(200).json({ result: (req.body.text || 'Sample bullet') + ' (improved)' });
});

router.post('/summary', (req, res) => {
  res.status(200).json({ result: (req.body.text || 'Sample summary') + ' (improved)' });
});

router.post('/rewrite', (req, res) => {
  res.status(200).json({ result: (req.body.text || 'Sample text') + ' (improved)' });
});

router.post('/prompt', (req, res) => {
  res.status(200).json({ result: (req.body.text || 'Sample text') + ' (improved)' });
});

module.exports = router;