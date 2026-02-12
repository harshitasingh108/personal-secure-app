# 🔐 Personal Secure App — Full Stack MERN Application

A scalable web application built with React and Node.js that implements authentication, protected dashboard, and task management.  
This project was developed as part of a Frontend Developer assignment to demonstrate frontend–backend integration, security practices, and clean UI design.

---

## 🚀 Features

### Authentication
- User Registration
- Secure Login (JWT based)
- Password hashing with bcrypt
- Token-based session handling
- Protected dashboard routes

### Dashboard
- Add task
- View tasks
- Delete tasks
- User-specific data (linked via userId)
- Logout functionality

### Security
- JWT authentication
- Protected API routes
- MongoDB data isolation per user
- Environment variables for secrets

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios (API calls)
- Tailwind CSS (UI styling)
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- bcrypt
- CORS

---

## 📂 Project Structure

personal-secure-app
├── backend
│ ├── config
│ ├── models
│ ├── routes
│ ├── middleware
│ └── server.js
│
└── frontend
├── src
│ ├── pages
│ ├── App.jsx
│ └── main.jsx
└── index.html
