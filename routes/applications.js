const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.json');

function readData() {
  return JSON.parse(fs.readFileSync(dataPath));
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// GET /api/applications - list tracked applications
router.get('/', (req, res) => {
  const data = readData();
  res.status(200).json(data.applications);
});

// POST /api/applications - log one
router.post('/', (req, res) => {
  if (!req.body) {
    return res.status(400).json({
        error: "Request body cannot be empty"
    });
  }
  const data = readData();
  const newApp = {
    id: Date.now().toString(),
    company: req.body.company || 'Unknown',
    role: req.body.role || 'Unknown',
    status: req.body.status || 'applied',
    createdAt: new Date().toISOString()
  };
  data.applications.push(newApp);
  writeData(data);
  res.status(201).json(newApp);
});

// PATCH /api/applications/:id - update status
router.patch('/:id', (req, res) => {
  const data = readData();
  const app = data.applications.find(a => a.id === req.params.id);
  if (!app) return res.status(404).json({ error: 'Application not found' });

  Object.assign(app, req.body, { id: app.id });
  writeData(data);
  res.status(200).json(app);
});

// DELETE /api/applications/:id - remove one
router.delete('/:id', (req, res) => {
  const data = readData();
  const index = data.applications.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Application not found' });

  data.applications.splice(index, 1);
  writeData(data);
  res.status(204).send();
});

module.exports = router;