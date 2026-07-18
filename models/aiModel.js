// Improve bullet points
function improveBullets(text) {
    return {
        result: (text || "Sample bullet") + " (improved)"
    };
}

// Improve summary
function improveSummary(text) {
    return {
        result: (text || "Sample summary") + " (improved)"
    };
}

// Rewrite text
function rewriteText(text) {
    return {
        result: (text || "Sample text") + " (improved)"
    };
}

// Generate prompt
function generatePrompt(text) {
    return {
        result: (text || "Sample text") + " (improved)"
    };
}

module.exports = {
    improveBullets,
    improveSummary,
    rewriteText,
    generatePrompt
};