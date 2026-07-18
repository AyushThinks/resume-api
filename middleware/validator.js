function validateJson(req, res, next) {
    if (!req.is("application/json")) {
        return res.status(400).json({
            error: "Request must be in JSON format"
        });
    }

    next();
}

module.exports = validateJson;