# Resume API

Backend REST API for an AI Resume Builder. Built with Express and Node.js.
Data is stored in `data.json` (no database yet).

## Routes

### Auth
- POST /api/auth/register – Create a new user account.
- POST /api/auth/login – Login and return a mock JWT token.
- POST /api/auth/logout – Logout the current user.
- POST /api/auth/forgot-password – Send a mock password reset email.
- POST /api/auth/reset-password – Reset the password (mock).

### Users
- GET /api/users/me – Get the current user profile.
- PUT /api/users/me – Update the current user profile.
- DELETE /api/users/me – Delete the current user profile.

### Documents
- GET /api/documents – Get all saved documents.
- POST /api/documents – Create a new document.
- POST /api/documents/import – Import and save a document.
- GET /api/documents/:id – Get a document by ID.
- PUT /api/documents/:id – Update a document.
- POST /api/documents/:id/duplicate – Create a copy of a document.
- DELETE /api/documents/:id – Delete a document.

### Sections & Items
- POST /api/documents/:id/sections – Add a new section.
- PATCH /api/documents/:id/sections/:sectionId – Update a section.
- DELETE /api/documents/:id/sections/:sectionId – Delete a section.
- POST /api/documents/:id/sections/:sectionId/items – Add a new item to a section.
- PATCH /api/documents/:id/sections/:sectionId/items/:itemId – Update an item.
- DELETE /api/documents/:id/sections/:sectionId/items/:itemId – Delete an item.

### Versions
- GET /api/documents/:id/versions – Get all saved versions.
- POST /api/documents/:id/versions – Save the current document as a new version.
- POST /api/documents/:id/versions/:versionId/restore – Restore a saved version.

### Templates
- GET /api/templates – Get all available templates.
- GET /api/templates/:id – Get a template by ID.

### AI
- POST /api/ai/bullets – Improve resume bullet points.
- POST /api/ai/summary – Improve the resume summary.
- POST /api/ai/rewrite – Rewrite the given text.
- POST /api/ai/prompt – Improve text using a custom prompt.

### Applications
- GET /api/applications – Get all job applications.
- POST /api/applications – Add a new job application.
- PATCH /api/applications/:id – Update a job application.
- DELETE /api/applications/:id – Delete a job application.