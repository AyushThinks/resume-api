const express = require('express');
const router = express.Router();

const documentsController = require('../controllers/documentsController');
const validateJson = require("../middleware/validator");


/** Documents */

// Get all documents
router.get('/', documentsController.getAllDocuments);

// Get document by ID
router.get('/:id', documentsController.getDocumentByID);

// Create document
router.post('/', validateJson, documentsController.createDocument);

// Update document
router.put('/:id', validateJson, documentsController.updateDocument);

// Delete document
router.delete('/:id', documentsController.deleteDocument);


/** Sections */

// Add section
router.post('/:documentId/sections', validateJson, documentsController.addSection);

// Update section
router.put('/:documentId/sections/:sectionId', validateJson, documentsController.updateSection);

// Delete section
router.delete('/:documentId/sections/:sectionId', documentsController.deleteSection);


/** Items */

// Add item
router.post('/:documentId/sections/:sectionId/items', validateJson, documentsController.addItem);

// Update item
router.put(
    '/:documentId/sections/:sectionId/items/:itemId',
    validateJson,
    documentsController.updateItem
);

// Delete item
router.delete(
    '/:documentId/sections/:sectionId/items/:itemId',
    documentsController.deleteItem
);


/** Versions */

// Get versions
router.get('/:documentId/versions', documentsController.getVersions);

// Save current version
router.post(
    '/:documentId/versions',
    documentsController.saveVersion
);

// Restore version
router.post(
    '/:documentId/versions/:versionId/restore',
    documentsController.restoreVersion
);

module.exports = router;