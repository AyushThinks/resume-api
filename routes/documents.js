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

// GET /api/documents - list all documents
router.get('/', (req, res) => {
  const data = readData();
  res.status(200).json(data.documents);
});

// POST /api/documents - create a new document
router.post('/', (req, res) => {
  const data = readData();
  const newDoc = {
    id: Date.now().toString(),
    title: req.body.title || 'Untitled',
    content: req.body.content || {},
    createdAt: new Date().toISOString()
  };
  data.documents.push(newDoc);
  writeData(data);
  res.status(201).json(newDoc);
});

// POST /api/documents/import - create from upload/LinkedIn
router.post('/import', (req, res) => {
  const data = readData();
  const newDoc = {
    id: Date.now().toString(),
    title: req.body.title || 'Imported Document',
    content: req.body.content || {},
    importedFrom: req.body.source || 'unknown',
    createdAt: new Date().toISOString()
  };
  data.documents.push(newDoc);
  writeData(data);
  res.status(201).json(newDoc);
});

// GET /api/documents/:id - get one document
router.get('/:id', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  res.status(200).json(doc);
});

// PUT /api/documents/:id - save edits
router.put('/:id', (req, res) => {
  const data = readData();
  const index = data.documents.findIndex(d => d.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Document not found' });

  data.documents[index] = {
    ...data.documents[index],
    ...req.body,
    id: data.documents[index].id // don't allow id overwrite
  };
  writeData(data);
  res.status(200).json(data.documents[index]);
});

// POST /api/documents/:id/duplicate - copy a document
router.post('/:id/duplicate', (req, res) => {
  const data = readData();
  const original = data.documents.find(d => d.id === req.params.id);
  if (!original) return res.status(404).json({ error: 'Document not found' });

  const copy = {
    ...original,
    id: Date.now().toString(),
    title: original.title + ' (Copy)',
    createdAt: new Date().toISOString()
  };
  data.documents.push(copy);
  writeData(data);
  res.status(201).json(copy);
});

// DELETE /api/documents/:id - delete a document
router.delete('/:id', (req, res) => {
  const data = readData();
  const index = data.documents.findIndex(d => d.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Document not found' });

  data.documents.splice(index, 1);
  writeData(data);
  res.status(204).send();
});




// POST /api/documents/:id/sections - add a section
router.post('/:id/sections', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  if (!doc.sections) doc.sections = [];

  const newSection = {
    id: Date.now().toString(),
    type: req.body.type || 'custom',
    title: req.body.title || 'New Section',
    items: []
  };
  doc.sections.push(newSection);
  writeData(data);
  res.status(201).json(newSection);
});

// PATCH /api/documents/:id/sections/:sectionId - edit or reorder a section
router.patch('/:id/sections/:sectionId', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  const section = doc.sections?.find(s => s.id === req.params.sectionId);
  if (!section) return res.status(404).json({ error: 'Section not found' });

  Object.assign(section, req.body, { id: section.id });
  writeData(data);
  res.status(200).json(section);
});

// DELETE /api/documents/:id/sections/:sectionId - remove a section
router.delete('/:id/sections/:sectionId', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  const index = doc.sections?.findIndex(s => s.id === req.params.sectionId);
  if (index === -1 || index === undefined) return res.status(404).json({ error: 'Section not found' });

  doc.sections.splice(index, 1);
  writeData(data);
  res.status(204).send();
});

// POST /api/documents/:id/sections/:sectionId/items - add an entry
router.post('/:id/sections/:sectionId/items', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  const section = doc.sections?.find(s => s.id === req.params.sectionId);
  if (!section) return res.status(404).json({ error: 'Section not found' });

  const newItem = {
    id: Date.now().toString(),  
    ...req.body
  };
  section.items.push(newItem);
  writeData(data);
  res.status(201).json(newItem);
});

// PATCH /api/documents/:id/sections/:sectionId/items/:itemId - edit or reorder an entry
router.patch('/:id/sections/:sectionId/items/:itemId', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  const section = doc.sections?.find(s => s.id === req.params.sectionId);
  if (!section) return res.status(404).json({ error: 'Section not found' });

  const item = section.items?.find(i => i.id === req.params.itemId);
  if (!item) return res.status(404).json({ error: 'Item not found' });

  Object.assign(item, req.body, { id: item.id });
  writeData(data);
  res.status(200).json(item);
});

// DELETE /api/documents/:id/sections/:sectionId/items/:itemId - remove an entry
router.delete('/:id/sections/:sectionId/items/:itemId', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  const section = doc.sections?.find(s => s.id === req.params.sectionId);
  if (!section) return res.status(404).json({ error: 'Section not found' });

  const index = section.items?.findIndex(i => i.id === req.params.itemId);
  if (index === -1 || index === undefined) return res.status(404).json({ error: 'Item not found' });

  section.items.splice(index, 1);
  writeData(data);
  res.status(204).send();
});



// GET /api/documents/:id/versions - list saved versions
router.get('/:id/versions', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  res.status(200).json(doc.versions || []);
});

// POST /api/documents/:id/versions - save current state as a version
router.post('/:id/versions', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  if (!doc.versions) doc.versions = [];

  const newVersion = {
    id: Date.now().toString(),
    snapshot: {
      title: doc.title,
      sections: doc.sections || []
    },
    savedAt: new Date().toISOString()
  };
  doc.versions.push(newVersion);
  writeData(data);
  res.status(201).json(newVersion);
});

// POST /api/documents/:id/versions/:versionId/restore - roll back to a version
router.post('/:id/versions/:versionId/restore', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  const version = doc.versions?.find(v => v.id === req.params.versionId);
  if (!version) return res.status(404).json({ error: 'Version not found' });

  doc.title = version.snapshot.title;
  doc.sections = version.snapshot.sections;
  writeData(data);
  res.status(200).json(doc);
});


module.exports = router;