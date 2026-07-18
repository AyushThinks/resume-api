const readData = require("../utils/readData");
const writeData = require("../utils/writeData");

/** Functions */

/** Document */
// Return all documents
function getAllDocuments(){
    const data = readData();
    return data.documents;
}

// Return all documents
function getDocumentByID(id){
    const data = readData();
    return data.documents.find(document => document.id === id);
}

// Create a document
function createDocument(documentData){
    const data = readData();
    const newDocument = {
        id: Date.now().toString(),
        title: documentData.title || 'Untitled',
        content: documentData.content || {},
        createdAt: new Date().toISOString()
    }; 
    data.documents.push(newDocument);
    writeData(data);
    return newDocument;
}

// Update a document
function updateDocument(id,updatedData){
    const data = readData();
    const index = data.documents.findIndex(d => d.id === id);
    if (index === -1) return null;

    data.documents[index] = {
        ...data.documents[index],
        ...updatedData,
        id: data.documents[index].id // don't allow id overwrite
    };
    writeData(data);
    return data.documents[index];
}

// Delete a document
function deleteDocument(id){
    const data = readData();
    const index = data.documents.findIndex(d => d.id === id);
    if (index === -1) return null;
    const deletedDocument = data.documents[index];
    data.documents.splice(index, 1);
    writeData(data);
    return deletedDocument;
}

/** Section */
// Add a section
function addSection(documentId,sectionData){
    const data = readData();
    const doc = data.documents.find(d => d.id === documentId);
    if (!doc) return null;

    if (!doc.sections) doc.sections = [];

    const newSection = {
        id: Date.now().toString(),
        type: sectionData.type || 'custom',
        title: sectionData.title || 'New Section',
        items: []
    };
    doc.sections.push(newSection);
    writeData(data);
    return newSection;
}

// Update section
function updateSection(documentId, sectionId, updatedData){
    const data = readData();
    const doc = data.documents.find(d => d.id === documentId);
    if (!doc) return null;

    const section = doc.sections?.find(s => s.id === sectionId);
    if (!section) return null;

    Object.assign(section, updatedData, { id: section.id });
    writeData(data);
    return section;
}

// Delete section 
function deleteSection(documentId, sectionId){
    const data = readData();
    const doc = data.documents.find(d => d.id === documentId);
    if (!doc) return null;

    const index = doc.sections?.findIndex(s => s.id === sectionId);
    if (index === -1 || index === undefined) return null;

    const deletedSection = doc.sections[index];
    doc.sections.splice(index, 1);
    writeData(data);
    return deletedSection;
}

/** Item */
// Add item 
function addItem(documentId, sectionId, itemData){
    const data = readData();
    const doc = data.documents.find(d => d.id === documentId);
    if (!doc) return null;

    const section = doc.sections?.find(s => s.id === sectionId);
    if (!section) return null;

    const newItem = {
        id: Date.now().toString(),  
        ...itemData
    };
    section.items.push(newItem);
    writeData(data);
    return newItem;
}

// Update an item 
function updateItem(documentId, sectionId, itemId, updatedData){
    const data = readData();
    const doc = data.documents.find(d => d.id === documentId);
    if (!doc) return null;

    const section = doc.sections?.find(s => s.id === sectionId);
    if (!section) return null;

    const item = section.items?.find(i => i.id === itemId);
    if (!item) return null;

    Object.assign(item, updatedData, { id: item.id });
    writeData(data);
    return item;
}

// Delete item
function deleteItem(documentId, sectionId, itemId){
    const data = readData();
    const doc = data.documents.find(d => d.id === documentId);
    if (!doc) return null;

    const section = doc.sections?.find(s => s.id === sectionId);
    if (!section) return null;

    const index = section.items?.findIndex(i => i.id === itemId);
    if (index === -1 || index === undefined) return null;

    const deletedItem = section.items[index];
    section.items.splice(index, 1);
    writeData(data);
    return deletedItem;
}

/** Version */
// Get versions
function getVersions(documentId){
    const data = readData();
    const doc = data.documents.find(d => d.id === documentId);
    if (!doc) return null;
    return doc.versions || [];
}

// Save current version
function saveVersion(documentId){
    const data = readData();
    const doc = data.documents.find(d => d.id === documentId);
    if (!doc) return null;

    if (!doc.versions) {
        doc.versions = [];
    }
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
    return newVersion;
}

// Restore version
function restoreVersion(documentId, versionId){
    const data = readData();
    const doc = data.documents.find(d => d.id === documentId);
    if (!doc) return null;

    const version = doc.versions?.find(v => v.id === versionId);
    if (!version) return null;

    doc.title = version.snapshot.title;
    doc.sections = version.snapshot.sections;
    writeData(data);
    return doc;
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