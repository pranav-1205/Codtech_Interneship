
---

# 📚 Library Management System – RESTful API Documentation

## 1. Project Overview

The **Library Management System RESTful API** is a backend application developed using **Node.js**, **Express.js**, and **MongoDB**.
It provides a structured way to manage books in a library using standard **CRUD (Create, Read, Update, Delete)** operations.

This API can be tested using **Postman** and extended easily for frontend or authentication features.

---

## 2. Objectives

* Create a RESTful API following industry standards
* Implement CRUD operations on library books
* Connect to MongoDB using MongoDB Atlas
* Test API endpoints using Postman
* Build a scalable backend structure

---

## 3. Technologies Used

| Technology    | Purpose              |
| ------------- | -------------------- |
| Node.js       | Runtime environment  |
| Express.js    | Web framework        |
| MongoDB Atlas | Cloud database       |
| Mongoose      | ODM for MongoDB      |
| Postman       | API testing          |
| JavaScript    | Programming language |

---

## 4. Project Structure

```
library-api/
│
├── models/
│   └── Book.js
│
├── routes/
│   └── bookRoutes.js
│
├── config/
│   └── db.js
│
├── server.js
├── package.json
└── README.md
```

---

## 5. Database Design

### Database Name

```
libraryDB
```

### Collection Name

```
books
```

### Book Schema

| Field     | Type    | Description         |
| --------- | ------- | ------------------- |
| title     | String  | Book title          |
| author    | String  | Author name         |
| genre     | String  | Book category       |
| price     | Number  | Book price          |
| available | Boolean | Availability status |
| createdAt | Date    | Auto-generated      |

---

## 6. Database Connection

MongoDB Atlas connection is handled in `config/db.js`.

```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

> ⚠️ **Security Note:**
> Connection strings should be stored in `.env` files and **never committed to GitHub**.

---

## 7. API Endpoints

### Base URL

```
http://localhost:5000/api/books
```

---

### ➕ Create a Book

**POST** `/api/books`

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self Help",
  "price": 499,
  "available": true
}
```

---

### 📖 Get All Books

**GET** `/api/books`

---

### 📘 Get Book by ID

**GET** `/api/books/:id`

---

### ✏️ Update a Book

**PUT** `/api/books/:id`

```json
{
  "price": 550,
  "available": false
}
```

---

### ❌ Delete a Book

**DELETE** `/api/books/:id`

---

## 8. Running the Server

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Start the server

```bash
node server.js
```

OR (if using nodemon)

```bash
nodemon server.js
```

### Output

```
Server running on port 5000
MongoDB Connected
```

---

## 9. Testing Using Postman

1. Open **Postman**
2. Select HTTP method (GET, POST, PUT, DELETE)
3. Enter endpoint URL
4. For POST/PUT:

   * Select **Body**
   * Choose **raw**
   * Set type to **JSON**
5. Click **Send**
6. Verify response status and data

---

## 10. Error Handling

* Invalid ID → `404 Not Found`
* Server error → `500 Internal Server Error`
* Validation error → `400 Bad Request`

---

## 11. Features Implemented

✔ RESTful architecture
✔ CRUD operations
✔ MongoDB Atlas integration
✔ Mongoose schema validation
✔ Postman testing

---

## 12. Future Enhancements

* User authentication (JWT)
* Role-based access (Admin/User)
* Book borrowing system
* Pagination & filtering
* Deployment on cloud (Render / Railway)

---

## 13. Conclusion

This project demonstrates the implementation of a **RESTful API** using modern backend technologies.
It provides a strong foundation for building full-stack applications and can be extended easily.

---
