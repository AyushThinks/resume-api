const express = require("express");

const app = express();
const PORT = 3000;

// this lets req.body work (needed for POST/PUT/PATCH)
app.use(express.json());


const documentsRouter = require('./routes/documents');
app.use('/api/documents', documentsRouter);

const templatesRouter = require('./routes/templates');
app.use('/api/templates', templatesRouter);

const applicationsRouter = require('./routes/applications');
app.use('/api/applications', applicationsRouter);

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);

const aiRouter = require('./routes/ai');
app.use('/api/ai', aiRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});