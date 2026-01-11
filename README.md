# Task Manager API (Backend)

The server-side application for the Task Manager project.
Built with **Node.js**, **Express**, and **MongoDB**.
It provides a RESTful API to handle task operations securely using **JWT Authentication**.

**[Deployed API (Render)](https://to-do-list-qssy.onrender.com/tasks)** | **[Frontend Repository](https://github.com/Urimk/To-do-list-frontend/tree/main)**

---

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (using Mongoose ODM)
* **Authentication:** JWT (JSON Web Tokens) & bcryptjs
* **Architecture:** MVC
* **Deployment:** Render

## 🔐 Authentication & Security
This API uses **Bearer Tokens** for security.
* **Public Routes:** Login & Register.
* **Protected Routes:** All Task operations require a valid JWT token.
* **Header Format:** `Authorization: Bearer <your_token>`

## API Endpoints

### 👤 User Authentication
| Method | Endpoint | Description | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Register a new user | `{ "username": "user1", "password": "123" }` |
| `POST` | `/auth/login` | Login & receive Token | `{ "username": "user1", "password": "123" }` |

### 📝 Tasks (Protected)
| Method | Endpoint | Description | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `GET` | `/tasks` | Get user's tasks | - |
| `POST` | `/tasks` | Create a new task | `{ "text": "Buy milk" }` |
| `PUT` | `/tasks/:id` | Update task status | `{ "isCompleted": true }` |
| `DELETE` | `/tasks/:id` | Delete a task | - |

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Urimk/To-do-list-backend.git](https://github.com/Urimk/To-do-list-backend.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_key
    ```

4.  **Run the server:**
    ```bash
    npm run dev
    # or
    npm start
    ```

---
*Created by Uri Knoll*
