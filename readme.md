# To-Do List API (Mini-Task)

A lightweight, robust RESTful API built with Node.js and Express for managing a to-do list or notes. This project handles full CRUD (Create, Read, Update, Delete) operations using an isolated, in-memory data store.

---

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed locally on your machine.

### 1. Installation & Setup
Clone this repository to your local computer, navigate into the project directory, initialize the package configuration, and install Express:

```bash
git clone [https://github.com/shreyadwivedi003/to_do_list-Mini-Task-.git](https://github.com/shreyadwivedi003/to_do_list-Mini-Task-.git)
cd to_do_list-Mini-Task-
npm init -y
npm install express
```

### 2. Running the Application
To start the backend server locally, run the entrypoint execution file:

```bash
node server.js
💡 Pro-Tip: Restarting the server manually every time you make a change can be tedious and irritating. To automate server restarts whenever you edit your files, run this instead:
```

```bash
npx nodemon server.js
```
Once booted up, the application will successfully listen for incoming HTTP requests locally at:

http://localhost:3000


### 🚀 Key Features & Architectural Decisions
Sequential Auto-Increment IDs: Every note is stamped with a static, progressive unique ID number (1, 2, 3...) to maintain permanent reference paths, preventing index-shifting bugs.

-True Partial Updates: The PATCH handler selectively evaluates fields, updating only what is provided in the payload and preventing existing properties from being overwritten with undefined.

-Contiguous Deletions: Uses .findIndex() and .splice() to safely slide data objects together upon deletion, eliminating array "holes".

-Structured Error Responses: Rejects malformed bodies or non-existent IDs gracefully using unified error tracking templates (e.g., 400 Bad Request, 404 Not Found).

-Input Sanitization: Cleanses input strings by calling .trim() to prevent blank spaces or empty text bodies from polluting storage.