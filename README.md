# Task Manager API (Backend)

The server-side application for the Task Manager project.
Built with **Node.js**, **Express**, and **MongoDB**.
It provides a RESTful API to handle task operations securely and efficiently.

**[Deployed API (Render)](https://to-do-list-qssy.onrender.com/tasks
)** | **[Frontend Repository](https://github.com/Urimk/To-do-list-frontend/tree/main)**

---

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (using Mongoose ODM)
* **Architecture:** MVC
* **Deployment:** Render

## API Endpoints

| Method | Endpoint      | Description           | Body (JSON)              |
| :---   | :---          | :---                  | :---                     |
| `GET`  | `/tasks`      | Get all tasks         | -                        |
| `POST` | `/tasks`      | Create a new task     | `{ "title": "New Task" }`|
| `PUT`  | `/tasks/:id`  | Update task status    | `{ "isCompleted": true }`|
| `DELETE`| `/tasks/:id` | Delete a task         | -                        |

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Urimk/To-do-list-backend/tree/main](https://github.com/Urimk/To-do-list-backend/tree/main)
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
    ```

4.  **Run the server:**
    ```bash
    npm start
    ```

---
*Created by Uri Knoll*
