const express = require("express");

/** Routes */
const documentsRouter = require("./routes/documents");
const templatesRouter = require("./routes/templates");
const applicationsRouter = require("./routes/applications");
const authRouter = require("./routes/auth");
const aiRouter = require("./routes/ai");
const usersRouter = require("./routes/users");

const app = express();
const PORT = 3000;

/** Global Middleware -- That runs automatically in every request. */
app.use(express.json());

/** API Routes */
app.use("/api/documents",documentsRouter);
app.use("/api/templates",templatesRouter);
app.use("/api/applications",applicationsRouter);
app.use("/api/auth",authRouter);
app.use("/api/users",usersRouter);
app.use("/api/ai",aiRouter);

/** Start Server */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})