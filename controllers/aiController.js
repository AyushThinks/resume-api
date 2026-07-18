const aiModel = require("../models/aiModel");

// bullets
function improveBullets(req, res) {
    const result = aiModel.improveBullets(req.body.text);
    res.status(200).json(result);
}

// summary
function improveSummary(req, res) {
    const result = aiModel.improveSummary(req.body.text);
    res.status(200).json(result);
}

// rewrite
function rewriteText(req, res) {
    const result = aiModel.rewriteText(req.body.text);
    res.status(200).json(result);
}

// prompt
function generatePrompt(req, res) {
    const result = aiModel.generatePrompt(req.body.text);
    res.status(200).json(result);
}

module.exports = {
    improveBullets,
    improveSummary,
    rewriteText,
    generatePrompt
};