# Resume API (MVC Architecture)

A RESTful Resume API built using **Node.js** and **Express.js** following the **MVC (Model-View-Controller)** architecture.

---

# Project Overview

This project provides APIs for managing:

- Documents
- Sections
- Items
- Versions
- Templates
- Applications
- Authentication
- AI Features
- User Profile

---

# Features

- MVC Architecture
- RESTful APIs
- CRUD Operations
- JSON File Storage
- Request Validation Middleware
- Version Management (save & restore resume versions)
- Resume Templates
- Mock Authentication
- AI Endpoints

---

# Tech Stack

- Node.js
- Express.js 5
- JavaScript
- JSON
- Postman

---

# Folder Structure

```text
resume-api/
│
├── controllers/
│   ├── aiController.js
│   ├── applicationsController.js
│   ├── authController.js
│   ├── documentsController.js
│   ├── templatesController.js
│   └── usersController.js
│
├── models/
│   ├── aiModel.js
│   ├── applicationsModel.js
│   ├── authModel.js
│   ├── documentsModel.js
│   ├── templatesModel.js
│   └── usersModel.js
│
├── routes/
│   ├── ai.js
│   ├── applications.js
│   ├── auth.js
│   ├── documents.js
│   ├── templates.js
│   └── users.js
│
├── middleware/
│   └── validator.js
│
├── utils/
│   ├── readData.js
│   └── writeData.js
│
├── data/
│   └── data.json
│
├── backup/
├── screenshots/
├── app.js
├── package.json
└── README.md
```


---

# Installation

```bash
npm install
npm start
```

Server:

```
http://localhost:3000
```

---

# API Endpoints

## Documents

- `GET /api/documents`

📷 **Screenshot:** 
![All Documents](<screenshots/get-all-doc.png>)

- `GET /api/documents/:id`

📷 **Screenshot:**
![Get document by id](<screenshots/doc-by-id.png>)

- `POST /api/documents`

📷 **Screenshot:**
![create document](<screenshots/create-doc.png>)

- `PUT /api/documents/:id`

📷 **Screenshot:**
![Update document](<screenshots/update-doc.png>)

- `DELETE /api/documents/:id`

📷 **Screenshot:**
![Delete document](<screenshots/delete-doc.png>)

---

## Sections

- `POST /api/documents/:documentId/sections`

📷 **Screenshot:**
![Create section](<screenshots/create-sec.png>)

- `PUT /api/documents/:documentId/sections/:sectionId`

📷 **Screenshot:**
![Update section](<screenshots/update-sec.png>)

- `DELETE /api/documents/:documentId/sections/:sectionId`

📷 **Screenshot:**
![Delete section](<screenshots/delete-sec.png>)

---

## Items

- `POST /api/documents/:documentId/sections/:sectionId/items`

📷 **Screenshot:**
![Create item](<screenshots/create-item.png>)

- `PUT /api/documents/:documentId/sections/:sectionId/items/:itemId`

📷 **Screenshot:**
![Update item](<screenshots/update-item.png>)

- `DELETE /api/documents/:documentId/sections/:sectionId/items/:itemId`

📷 **Screenshot:**
![Delete item](<screenshots/delete-item.png>)

---

## Versions

- `GET /api/documents/:documentId/versions`

📷 **Screenshot:**
![Get versions](<screenshots/get-versions.png>)

- `POST /api/documents/:documentId/versions`

📷 **Screenshot:**
![Create version](<screenshots/create-version.png>)

- `POST /api/documents/:documentId/versions/:versionId/restore`

📷 **Screenshot:**
![Restore version](<screenshots/restore-version.png>)

---

## Templates

- `GET /api/templates`

📷 **Screenshot:**
![Get templates](<screenshots/get-templates.png>)

- `GET /api/templates/:id`

📷 **Screenshot:**
![Get template](<screenshots/get-template.png>)

---

## Applications

- `GET /api/applications`

📷 **Screenshot:**
![Get applications](<screenshots/get-applications.png>)

- `POST /api/applications`

📷 **Screenshot:**
![Create application](<screenshots/create-application.png>)

- `PATCH /api/applications/:id`

📷 **Screenshot:**
![Edit application](<screenshots/edit-application.png>)

- `DELETE /api/applications/:id`

📷 **Screenshot:**
![Delete application](<screenshots/delete-application.png>)

---

## Authentication

- `POST /api/auth/register`

📷 **Screenshot:**
![Register](<screenshots/register.png>)

- `POST /api/auth/login`

📷 **Screenshot:**
![Login](<screenshots/login.png>)

- `POST /api/auth/logout`

📷 **Screenshot:**
![Logout](<screenshots/logout.png>)

- `POST /api/auth/forgot-password`

📷 **Screenshot:**
![Forgot Password](<screenshots/forgot-password.png>)

- `POST /api/auth/reset-password`

📷 **Screenshot:**
![Reset Password](<screenshots/reset-password.png>)

---

## AI

- `POST /api/ai/bullets`

📷 **Screenshot:**
![Bullets](<screenshots/bullets.png>)

- `POST /api/ai/summary`

📷 **Screenshot:**
![Summary](<screenshots/summary.png>)

- `POST /api/ai/rewrite`

📷 **Screenshot:**
![Rewrite](<screenshots/rewrite.png>)

- `POST /api/ai/prompt`

📷 **Screenshot:**
![Prompt](<screenshots/prompt.png>)

---

## Users

- `GET /api/users/me`

📷 **Screenshot:**
![Get user](<screenshots/get-user.png>)

- `PUT /api/users/me`

📷 **Screenshot:**
![Update user](<screenshots/update-user.png>)

- `DELETE /api/users/me`

📷 **Screenshot:**
![Delete user](<screenshots/delete-user.png>)

---

# Middleware

## JSON Validator

Validates that requests with a body are sent using the `application/json` content type. Applied to all `POST`, `PUT`, and `PATCH` routes that expect a request body.

📷 **Screenshot:** Validator Middleware Response
![Validator Response](<screenshots/validator.png>)

---

# Data Storage

Application data (documents, templates, and applications) is stored inside:

```
data/data.json
```

Data is read and written using dedicated utility functions (`utils/readData.js` and `utils/writeData.js`), keeping file I/O logic separate from the controllers.


---

# Testing

All APIs were tested successfully using **Postman**.


---

# Author

**Ayush Joshi**