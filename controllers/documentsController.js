const documentsModel = require('../models/documentsModel');

/** Document */
// Return all documents
function getAllDocuments(req, res) {
    const documents = documentsModel.getAllDocuments();

    return res.status(200).json(documents);
}

// Return document by ID
function getDocumentByID(req, res) {
    const document = documentsModel.getDocumentByID(req.params.id);
    if (!document) {
        return res.status(404).json({
            error: 'Document not found'
        });
    }

    return res.status(200).json(document);
}

// Create a document
function createDocument(req, res) {
    const newDocument = documentsModel.createDocument(req.body);

    return res.status(201).json(newDocument);
}

// Update a document
function updateDocument(req, res) {
    const updatedDocument = documentsModel.updateDocument(
        req.params.id,
        req.body
    );
    if (!updatedDocument) {
        return res.status(404).json({
            error: 'Document not found'
        });
    }

    return res.status(200).json(updatedDocument);
}

// Delete a document
function deleteDocument(req, res) {
    const deletedDocument = documentsModel.deleteDocument(req.params.id);
    if (!deletedDocument) {
        return res.status(404).json({
            error: 'Document not found'
        });
    }

    return res.status(200).json(deletedDocument);
}

/** Section */
// Add a section
function addSection(req, res) {
    const newSection = documentsModel.addSection(
        req.params.documentId,
        req.body
    );
    if (!newSection) {
        return res.status(404).json({
            error: 'Document not found'
        });
    }

    return res.status(201).json(newSection);
}

// Update section
function updateSection(req, res) {
    const updatedSection = documentsModel.updateSection(
        req.params.documentId,
        req.params.sectionId,
        req.body
    );
    if (!updatedSection) {
        return res.status(404).json({
            error: 'Document or Section not found'
        });
    }

    return res.status(200).json(updatedSection);
}

// Delete section
function deleteSection(req, res) {
    const deletedSection = documentsModel.deleteSection(
        req.params.documentId,
        req.params.sectionId
    );
    if (!deletedSection) {
        return res.status(404).json({
            error: 'Document or Section not found'
        });
    }

    return res.status(200).json(deletedSection);
}

/** Item */
// Add item
function addItem(req, res) {
    const newItem = documentsModel.addItem(
        req.params.documentId,
        req.params.sectionId,
        req.body
    );
    if (!newItem) {
        return res.status(404).json({
            error: 'Document or Section not found'
        });
    }

    return res.status(201).json(newItem);
}

// Update an item
function updateItem(req, res) {
    const updatedItem = documentsModel.updateItem(
        req.params.documentId,
        req.params.sectionId,
        req.params.itemId,
        req.body
    );
    if (!updatedItem) {
        return res.status(404).json({
            error: 'Document, Section or Item not found'
        });
    }

    return res.status(200).json(updatedItem);
}

// Delete item
function deleteItem(req, res) {
    const deletedItem = documentsModel.deleteItem(
        req.params.documentId,
        req.params.sectionId,
        req.params.itemId
    );
    if (!deletedItem) {
        return res.status(404).json({
            error: 'Document, Section or Item not found'
        });
    }

    return res.status(200).json(deletedItem);
}

/** Version */
// Get versions
function getVersions(req, res) {
    const versions = documentsModel.getVersions(req.params.documentId);
    if (!versions) {
        return res.status(404).json({
            error: 'Document not found'
        });
    }

    return res.status(200).json(versions);
}

// Save current version
function saveVersion(req, res) {
    const newVersion = documentsModel.saveVersion(req.params.documentId);
    if (!newVersion) {
        return res.status(404).json({
            error: 'Document not found'
        });
    }

    return res.status(201).json(newVersion);
}

// Restore version
function restoreVersion(req, res) {
    const restoredDocument = documentsModel.restoreVersion(
        req.params.documentId,
        req.params.versionId
    );
    if (!restoredDocument) {
        return res.status(404).json({
            error: 'Document or Version not found'
        });
    }

    return res.status(200).json(restoredDocument);
}

module.exports = {
    /** Documents */ 
    getAllDocuments,
    getDocumentByID,
    createDocument,
    updateDocument,
    deleteDocument,

    /** Sections */
    addSection,
    updateSection,
    deleteSection,

    /** Items */ 
    addItem,
    updateItem,
    deleteItem,

    /** Versions */
    getVersions,
    saveVersion,
    restoreVersion,
};